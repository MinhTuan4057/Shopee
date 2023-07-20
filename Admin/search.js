//Nhập giá trị tìm kiếm sản phẩm khi click button hoặc enter
function searchProduct() {
    var searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  
    axios.get('https://64997ba779fbe9bcf83f571b.mockapi.io/Products')
      .then(function(response) {
        var productList = response.data;
  
        // Lọc danh sách sản phẩm để hiển thị chỉ sản phẩm tương ứng với từ khóa tìm kiếm
        var filteredList = productList.filter(function(product) {
          return product.name.toLowerCase().indexOf(searchTerm) !== -1;
        });
  
        var htmlContent = '';
  
        // Hiển thị danh sách sản phẩm tương ứng
        for (var i = 0; i < filteredList.length; i++) {
          var product = filteredList[i];
          htmlContent += `
            <tr>
              <td class="item__content stt text-16">${i + 1}</td>
              <td class="item__content name text-16">${product.name}</td>
              <td class="item__content text-16" style="padding: 5px !important;">
                <img src="${product.img}" alt="" style="object-fit: cover; background-repeat: no-repeat; background-size: contain; width: 100%; height: auto;">
              </td>
              <td class="item__content text-16">${product.desc}</td>
              <td class="item__content price text-16">${product.price}</td>
              <td class="item__content discount text-16">${product.discount}</td>
              <td class="item__content corpri text-16">${product.corpri}</td>
              <td class="item__content house text-16">${product.warehouse}</td>
              <td class="item__content type text-16">${product.type}</td>
              <td class="edit item__content">
                <button class="btn2 text-16 mb-10" onclick="deleteProduct(${product.id})">Xoá</button>
                <button onclick="updateProduct(${product.id}), toggleAdd()" class="btn2 text-16">Chỉnh Sửa</button>
              </td>
            </tr>
          `;
        }
  
        document.getElementById('tbody').innerHTML = htmlContent;
      })
      .catch(function(error) {
        console.error(error);
      });
  }