var cartList = [];
// Lấy danh sách sản phẩm từ LocalStorage nếu có
var dsCart = JSON.parse(localStorage.getItem('cartList'));
var cartBody = JSON.parse(localStorage.getItem('cartbody'));

if (dsCart && dsCart.length > 0) {
  cartList = dsCart 
  renderCart()
} else {
  document.querySelector('.header__cart-list-msg').style.display = 'block'
  document.querySelector('.header__cart-no-cart-img').style.display = 'block'
}

document.addEventListener('click', function(event) {
  const quantityElement = document.getElementById("quantity");
  let quantityValue = parseInt(quantityElement.innerText);

  if (event.target && event.target.classList.contains('btnThem')) {
    const btnItem = event.target;
    const product = btnItem.parentElement;
    const productImg = product.querySelector("img").src
    const productName = product.querySelector("h4").innerText
    const productPrice = product.querySelector(".price").innerText
    const productType = product.querySelector(".tpe").innerHTML
    
    cartList.push({
      name: productName,
      price: productPrice,
      quantity2: quantityValue,
      image: productImg,
      type: productType
    });

    console.log(productName, productPrice, productType)

    // Tăng quantity mỗi khi click
    quantityValue++;
    quantityElement.innerText = quantityValue.toString();

    // Lưu danh sách sản phẩm vào LocalStorage
    localStorage.setItem('cartList', JSON.stringify(cartList));
    localStorage.setItem('cartbody', JSON.stringify(cartBody));
  }

  renderCart()
  renderCartList()
})


//render danh sach san pham trong cart
function renderCart() {
  var dsCart = cartList
  var cartContent = ''

  for (let i = 0; i < dsCart.length; i++) {
    var Cart = dsCart[i]
    cartContent += `
    <a href="./cart.html" style="text-decoration: none;">
      <li class="header__cart-item">
        <img src="${Cart.image}" alt="" class="header__cart-img" id="cartImg">
        <div class="header__cart-item-info">
          <div class="header__cart-item-head mb-43">
            <h5 class="header__cart-item-name text-14" id="cartName">${Cart.name}</h5>
            <span style="visibility: hidden" id="cartType">${Cart.type}</span>
            <div class="header__cart-item-price-wrap">
              <span class="header__cart-item-price text-14" id="cartPrice">${Cart.price}</span>
            </div>
          </div>
        </div>
      </li>
      </a>
    `
    // Lưu thông tin sản phẩm vào cartList
    cartList[i].image = Cart.image;
    cartList[i].name = Cart.name;
    cartList[i].price = Cart.price;
    cartList[i].type = Cart.type;
  }

  document.querySelector('.header__cart-list-msg').style.display = 'none'
  document.querySelector('.header__cart-no-cart-img').style.display = 'none'
  document.getElementById('cartList').innerHTML = cartContent
}


//lay api dssp
var promise = axios ({
    url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
    method: 'GET'
})

function renderCartList() {
  var promise = axios({
    url: 'https://64997ba779fbe9bcf83f571b.mockapi.io/Products',
    method: 'GET',
  });

  promise
    .then(function (result) {
      var htmlCart = '';

      for (var i = 0; i < cartList.length; i++) {
        var product = cartList[i];
        var pr = result.data[i];

       var quantity = product.quantity;
       //lấy số đơn vị hàng nghìn
       var price = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
       var total = isNaN(price) || isNaN(quantity) ? 0 : price * quantity;
       var formattedTotal = total.toLocaleString('vi-VN', {
         style: 'currency',
         currency: 'VND',
         minimumFractionDigits: 0,
         maximumFractionDigits: 3,
       });
        
        htmlCart += `
          <div class="title__brand pl-30 pr-30 pt-30 pb-10 mt-30 info__pro">
            <div class="contain__info">
              <div class="const__item mr-20">
                <img class="img" src="${product.image}" alt="">
              </div>
              <div class="const__item mr-20">
                <span class="text-16 style">${product.name}</span>
              </div>
              <div class="const__item text-16 type">
                <p class="mr-2">Phân Loại:</p>
                <p>${product.type}</p>
              </div>
              <ul class="item__name mt-10">
                <li class="text-16 ml">${product.price}</li>
                <li class="text-16 ml mount">
                  <button class="increse minus" onclick="handleMinus(${i})"><iconify-icon icon="radix-icons:minus" class="text-16"></iconify-icon></button>
                  <input type="text" class="input" id="inputValue${i}" value="${quantity}" style="display: block;">
                  <button class="increse plus" onclick="handlePlus(${i})"><iconify-icon icon="ion:add" class="text-16"></iconify-icon></button>
                </li>
                <li class="text-16 ml count">${formattedTotal}</li>
                <li class="text-16 ml">
                  <button class="btndelete" onclick="deleteProduct(event)">Xoá</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="inline"></div>
        `;
      }
    
      document.getElementById('cartbody').innerHTML = htmlCart;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function handlePlus(index) {
  quantity[index]++;
  var inputElement = document.getElementById(`inputValue${index}`);
  inputElement.value = quantity[index];

  // Cập nhật số lượng sản phẩm trong giỏ hàng và lưu vào LocalStorage
  cartList[index].quantity = quantity[index];
  localStorage.setItem('cartList', JSON.stringify(cartList));
  localStorage.setItem('quantity', JSON.stringify(quantity));

  // Tính lại tổng giá tiền và cập nhật lên giao diện
  calculateTotalPrice();
}

function handleMinus(index) {
  if (quantity[index] > 1) {
    quantity[index]--;
    var inputElement = document.getElementById(`inputValue${index}`);
    inputElement.value = quantity[index];

    // Cập nhật số lượng sản phẩm trong giỏ hàng và lưu vào LocalStorage
    cartList[index].quantity = quantity[index];
    localStorage.setItem('cartList', JSON.stringify(cartList));
    localStorage.setItem('quantity', JSON.stringify(quantity));

    // Tính lại tổng giá tiền và cập nhật lên giao diện
    calculateTotalPrice();
  }
}

function handlePurchase() {
  // Lưu trữ giá trị của giỏ hàng và giá trị của tổng giá tiền vào LocalStorage
  localStorage.setItem('cartList', JSON.stringify(cartList));
  localStorage.setItem('quantity', JSON.stringify(quantity));

  // Tính lại tổng giá tiền và cập nhật lên giao diện
  calculateTotalPrice();

  // Cập nhật giá trị của totalPrice trong LocalStorage
  var totalPrice = document.getElementById('total-price').innerText.replace('đ', '');
  localStorage.setItem('totalPrice', JSON.stringify(parseFloat(totalPrice)));
}

//Xoá sản phẩm khỏi giỏ hàng
document.addEventListener('click', function (event) {
  if (event.target && event.target.classList.contains('btndelete')) {
    const btnDelete = event.target;
    const product = btnDelete.parentElement.parentElement.parentElement;
    const productName = product.querySelector('.style').innerText;

    // Lọc sản phẩm cần xóa khỏi danh sách giỏ hàng
    cartList = cartList.filter(product => product.name !== productName);
    quantity =quantity.filter((quantity, index) => index !== cartList.findIndex(product => product.name === productName));

    // Cập nhật danh sách giỏ hàng và lưu vào LocalStorage
    localStorage.setItem('cartList', JSON.stringify(cartList));
    localStorage.setItem('quantity', JSON.stringify(quantity));

    // Render lại danh sách giỏ hàng
    renderCartList();
    
  }
});

// Load danh sách giỏ hàng từ LocalStorage khi trang được tải
window.onload = function () {
  var storedCartList = localStorage.getItem('cartList');
  var storedQuantity = localStorage.getItem('quantity');

  if (storedCartList && storedQuantity) {
    cartList = JSON.parse(storedCartList);
    quantity = JSON.parse(storedQuantity);
  } else {
    // Khởi tạo giá trị mặc định cho biến quantity
    quantity = new Array(cartList.length).fill(1);
  }

  // Kiểm tra giá trị của quantity có bị NaN hay không
  if (quantity.some(q => isNaN(q))) {
    // Khởi tạo giá trị mặc định cho biến quantity nếu giá trị trong LocalStorage là NaN
    quantity = new Array(cartList.length).fill(1);
  }

  renderCartList();
};


//Tính tổng số tiền của sản phẩm

// Lấy đối tượng button có id là "purchase"
var purchaseButton = document.getElementById("purchase");

// Thêm sự kiện "click" vào button
purchaseButton.addEventListener("click", function() {
  if (cartList.length > 0) {
    // Tính tổng tiền của các sản phẩm trong giỏ hàng
    var totalPrice = cartList.reduce(function(total, product) {
      var price = parseFloat(product.price.replace(/,/g, ""));
      var quantity = parseInt(product.quantity);
      return total + price * quantity;
    }, 0);

    // Xóa tất cả sản phẩm khỏi giỏ hàng
    cartList = [];

    // Lưu giá trị tổng tiền vào localStorage
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

    // Lưu mảng rỗng vào localStorage
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }
});


var quantity = product.quantity;
var price = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
var total = isNaN(price) || isNaN(quantity) ? 0 : price * quantity;
var formattedTotal = total.toLocaleString('vi-VN', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
});

// Tính tổng tiền của các sản phẩm trong giỏ hàng
function calculateTotalPrice() {
  var totalPrice = cartList.reduce(function(total, product) {
    var price = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
    var quantity = parseInt(product.quantity);

    // Kiểm tra giá trị của quantity có bị NaN hay không
    if (isNaN(quantity)) {
      quantity = 1;
    }

    return total + price * quantity;
  }, 0);

  // Kiểm tra giá trị của totalPrice có bị NaN hay không
  if (isNaN(totalPrice)) {
    totalPrice = 0;
  }

  // Cập nhật giá trị tổng tiền trên trang web
  var totalPriceElement = document.getElementById("total-price");
  totalPriceElement.innerText = totalPrice.toLocaleString() + "đ"

  // Lưu giá trị tổng tiền vào localStorage
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
}
