const iconClose3 = document.getElementById('iconClose3');
const addPro = document.getElementById('addProduct');
const modal2 = document.querySelector('.modal2');
const formPro = document.querySelector('.form');

function toggleAdd() {
  modal2.classList.toggle('none');
  formPro.classList.toggle('product');
}

function handleModalClick(e) {
  if (e.target == e.currentTarget) {
    // implementation of handleModalClick function
  }
}

iconClose3.addEventListener('click', toggleAdd);
addPro.addEventListener('click', toggleAdd);
modal2.addEventListener('click', handleModalClick);
