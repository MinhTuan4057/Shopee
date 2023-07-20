// hàm get element
function getElement(selector) {
    return document.querySelector(selector)
}

var promise = axios ({
    url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
    method: 'GET'
})


//Product đã cập nhập
function pushProduct() {
    var promise = axios({
        url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
        method: 'GET',
    })
    promise
    // xử lý thành công
    .then(function (result) {
        var htmtContent = ''
for (var i = 0; i < result.data.length; i++) {
    var prd = result.data[i]
    htmtContent += `
    <div class="gird__column-2-4">
    <div class="home-product-item">
        <div class="home-product-item__img">
        <img src="${prd.img}" alt="" style="width: 100%;">
        <button class="btnThem btn text-14"> <i class="fa-regular fa-plus text-16 color mr-5"></i>Thêm vào giỏ hàng</button>
            <h4 class="home-product-item__name text-16 mb-0 namesp">${prd.name}</h4>
            <h3 class="home-product-item__name text-14 decr">${prd.desc}</h3>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old text-16">${prd.corpri}</span>
                <span class="home-product-item__price-current price text-16">${prd.price}</span>
                <span style="visibility: hidden;" class="tpe">${prd.type}</span>
            </div>
            <div class="home-product-item__action">
                <span class="home-product-item__like home-product-item__like--liked">
                    <i class="home-product-item__like-icon-empty fa-regular fa-heart text-14"></i>
                        <i class="home-product-item__like-icon-fill fa-solid fa-heart text-14 text-14"></i>
                </span>
                <div class="home-product-item__rating">
                    <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                </div>
                <span class="home-product-item__sold text-13">Đã bán 15,6k</span>
            </div>
                <span class="home-product-item__brand text-14">${prd.warehouse}</span>
            </div>
            <div class="home-product-item__favourite">
                <i class="fa-solid fa-check text-15"></i>
                <span>Yêu thích</span>
            </div>
            <div class="home-product-item__sale-off">
                <span class="home-product-item__sale-off-percent text-14">${prd.discount}</span>
                <span class="home-product-item__sale-off-label text-13">Giảm</span>
            </div>
    </div>
    </div>
    ` 
}
document.getElementById('listPrd').innerHTML = htmtContent

    })

    // Xử lý thất bại
    .catch(function (err) {
        console.log(err)
    })
}
pushProduct()

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
          var prd = filteredList[i];
          htmlContent += `
          <div class="gird__column-2-4">
          <div class="home-product-item">
              <div class="home-product-item__img">
              <img src="${prd.img}" alt="" style="width: 100%;">
              <button class="btnThem btn text-14"> <i class="fa-regular fa-plus text-16 color mr-5"></i>Thêm vào giỏ hàng</button>
                  <h4 class="home-product-item__name text-16 mb-0 namesp">${prd.name}</h4>
                  <h3 class="home-product-item__name text-14 decr">${prd.desc}</h3>
                  <div class="home-product-item__price">
                      <span class="home-product-item__price-old text-16">${prd.corpri}</span>
                      <span class="home-product-item__price-current price text-16">${prd.price}</span>
                      <span style="visibility: hidden" class="tpe">${prd.type}</span>
                  </div>
                  <div class="home-product-item__action">
                      <span class="home-product-item__like home-product-item__like--liked">
                          <i class="home-product-item__like-icon-empty fa-regular fa-heart text-14"></i>
                              <i class="home-product-item__like-icon-fill fa-solid fa-heart text-14 text-14"></i>
                      </span>
                      <div class="home-product-item__rating">
                          <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                          <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                          <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                          <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                          <i class="home-product-item__star--gold fa-solid fa-star text-14"></i>
                      </div>
                      <span class="home-product-item__sold text-13">Đã bán 15,6k</span>
                  </div>
                      <span class="home-product-item__brand text-14">${prd.warehouse}</span>
                  </div>
                  <div class="home-product-item__favourite">
                      <i class="fa-solid fa-check text-15"></i>
                      <span>Yêu thích</span>
                  </div>
                  <div class="home-product-item__sale-off">
                      <span class="home-product-item__sale-off-percent text-14">${prd.discount}</span>
                      <span class="home-product-item__sale-off-label text-13">Giảm</span>
                  </div>
          </div>
          </div>
          `;
        }
  
        document.getElementById('listPrd').innerHTML = htmlContent;
      })
      .catch(function(error) {
        console.error(error);
      });
  }

