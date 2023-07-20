// hàm get element
function getElement(selector) {
    return document.querySelector(selector)
}

var promise = axios ({
    url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
    method: 'GET'
})


// get products list
function getProductList() {
    var promise = axios({
      url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
      method: 'GET',
    });
  
    promise
      .then(function(result) {
        var products = result.data;
  
        var htmlContent = '';
        for (var i = 0; i < products.length; i++) {
          var product = products[i];
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
          ` 
        }
        document.getElementById('tbody').innerHTML = htmlContent;
  
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  getProductList();


  function layThongTinSP(isEdit) {
    // Lấy thông tin từ input
    var name = getElement('#name').value.trim();
    var img = getElement('#img').value.trim();
    var desc = getElement('#desc').value.trim();
    var price = getElement('#price').value.trim();
    var discount = getElement('#discount').value.trim();
    var corpri = getElement('#corpri').value.trim();
    var warehouse = getElement('#warehouse').value.trim();
    var type = getElement('#type').value.trim();
    var id = getElement('#idProductUpdate').value.trim();

     // Tạo đối tượng product từ lớp đối tượng Product
     var products = new Products(id, name, img, desc, price, discount, corpri, warehouse, type);
  
    // Kiểm tra hợp lệ của dữ liệu đầu vào
    var isValid = true;
  
    // Kiểm tra tên sản phẩm
    isValid &= kiemTraChuoi(
      name,
      1,
      undefined,
      '#tbName',
      'Tên sản phẩm không được để trống'
    );

    // Kiểm tra mô tả sản phẩm
    isValid &= kiemTraChuoi(
        desc,
        1,
        undefined,
        '#tbDesc',
        'Phần mô tả sản phẩm không được để trống'
      );

      // Kiểm tra kho sản phẩm
    isValid &= kiemTraChuoi(
        warehouse,
        1,
        undefined,
        '#tbWarehouse',
        'Kho sản phẩm không được để trống'
      );

      // Kiểm tra loai sản phẩm
    isValid &= kiemTraChuoi(
        type,
        1,
        undefined,
        '#tbType',
        'Vui lòng chọn giới tính cho sản phẩm'
      );
  
  
    // Kiểm tra giá sản phẩm
    isValid &= kiemTraChuoi (
      price,
      1,
      undefined,
      '#tbPrice',
      'Vui lòng nhập giá sản phẩm'
    )&&
    kiemTraSo(
      price,
      0,
      undefined,
      '#tbPrice',
      'Giá sản phẩm phải là số'
    );
  
    // Kiểm tra giảm giá
    isValid &= kiemTraChuoi(
      discount,
      1,
      undefined,
      '#tbDiscount',
      'Hãy nhập giảm giá cho sản phẩm'
    )&&
      kiemTraPattern(
        discount,
        '#tbDiscount',
        /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)%?$/,
        'Giảm giá định dạng bằng số (%)'
      );
  
    // Kiểm tra giá trị nhập vào là số và không âm
    isValid &= kiemTraSo(
      corpri,
      0,
      undefined,
      '#tbCorpri',
      'Giá nhập phải là số'
    ) &&
    kiemTraChuoi(
        corpri,
        1,
        undefined,
        '#tbCorpri',
        'Vui lòng nhập giá gốc cho sản phẩm'
    )

  
    // Kiểm tra định dạng ảnh
    isValid &= kiemTraChuoi(
      img,
      1,
      undefined,
      '#tbImg',
      'Hãy thêm ảnh cho sản phẩm chủa bạn'
    );

  
    // Nếu dữ liệu đầu vào không hợp lệ, trả về undefined
    if (!isValid) {
      return undefined;
    }
    
    // Tạo đối tượng product từ lớp đối tượng Product
    var products = new Products(id, name, img, desc, price, discount, corpri, warehouse, type);
  
    // Trả về đối tượng product
    return products;
  }
  
  function kiemTraChuoi(value, minLength, maxLength, selector, messErr) {
    if (minLength && value.trim().length < minLength) {
      getElement(selector).style.display = "block";
      getElement(selector).innerHTML = messErr;
      return false;
    }
  
    if (maxLength && value.trim().length > maxLength) {
      getElement(selector).style.display = "block";
      getElement(selector).innerHTML = messErr;
      return false;
    }
  
    getElement(selector).innerHTML = '';
    return true;
  }
  
  function kiemTraSo(value, minValue, maxValue, selector, messErr) {
    if (isNaN(value) || value < minValue) {
      getElement(selector).style.display = "block";
      getElement(selector).innerHTML = messErr;
      return false;
    }
  
    if (maxValue && value >= maxValue) {
      getElement(selector).style.display = "block";
      getElement(selector).innerHTML = messErr;
      return false;
    }
  
    getElement(selector).innerHTML = '';
    return true;
  }
  
  function kiemTraPattern(value, selector, pattern, messErr) {
    if (!pattern.test(value)) {
      getElement(selector).style.display = "block";
      getElement(selector).innerHTML = messErr;
      return false;
    }
  
    getElement(selector).innerHTML = '';
    return true;
  }
  


// Thêm sản phẩm
getElement('#btnThem').onclick = function () {
    // Lấy thông tin sản phẩm từ biểu mẫu và kiểm tra hợp lệ
    var product = layThongTinSP(false);
  
    // Nếu sản phẩm hợp lệ, thêm sản phẩm và cập nhật danh sách sản phẩm
    if (product !== undefined) {
      //  call API tạo product
      var promise = axios({
        url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
        method: 'POST',
        data: product,
      });
  
      promise
        // Tạo thành công
        .then(function () {
  
          // Dom tới btn close đóng modal
          getElement('#iconClose3').click();
  
          // Get lại danh sách sản phẩm sau khi tạo thành công
          getProductList();
        })
        // Tạo thất bại
        .catch(function () {
          alert('Tạo sản phẩm thất bại');
        });
    }
  };

// Delete product
function deleteProduct(idProduct) {
    var promise = axios({
        url: `https://64997ba779fbe9bcf83f571b.mockapi.io/Products/${idProduct}`,
        method: 'DELETE',
    })

    promise
        // Xóa thành công
        .then(function () {
            getProductList()
        })

        // Xóa sản phẩm thất bại
        .catch(function () {
            alert('Xóa sản phẩm thất bại')
        })
}


var idProductUpdate = ''

// update product
function updateProduct(idProduct) {
    var promise = axios({
        url: `https://64997ba779fbe9bcf83f571b.mockapi.io/Products/${idProduct}`,
        method: 'GET',
    })

    promise.then(function (result) {
        var prd = result.data
        idProductUpdate = prd.id

        // dom và show UI
        getElement('#name').value = prd.name
        getElement('#img').value = prd.img
        getElement('#desc').value = prd.desc
        getElement('#price').value = prd.price
        getElement('#discount').value = prd.discount
        getElement('#corpri').value = prd.corpri
        getElement('#warehouse').value = prd.warehouse
        getElement('#type').value = prd.type
        getElement('#idProductUpdate').value = prd.id

        getElement('#updatePrd').innerHTML = `
            <button id="btnEdit" type="button" class="btn2 text-16" onclick="editPrd(${prd.id})">Cập Nhật</button>`
    })

}

function editPrd(id) {
    var productEdit = layThongTinSP()

    var promise = axios({
        url: `https://64997ba779fbe9bcf83f571b.mockapi.io/Products/${id}`,
        method: 'PUT',
        data: productEdit,
    })
    promise.then(function () {
        // dom tới btn close đóng modal
        getElement('#iconClose3').click()

        getProductList()
    })
}



