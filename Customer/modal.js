//Modal form Sigin
var iconClose = document.getElementById('iconClose')
var clickSigin = document.getElementById('clickSigin')
var clickLogin = document.getElementById('clickLogin')
var modal1 = document.querySelector('.modal')
var btnClose = document.querySelector('.auth-form__controls-back')
var form = document.querySelector('.auth-form')
var form2 = document.querySelector('.auth-form2')

function toggleModal(e) {
    modal1.classList.toggle('hide')
    form.classList.toggle('sigin')
}

clickSigin.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal1.addEventListener('click', function (e) {
    if (e.target == e.currenTarget) {

    }
})


//Modal form Login
var iconClose2 = document.getElementById('iconClose2')
var clickLogin = document.getElementById('clickLogin')
var btnClose2 = document.querySelector('.back')

function toggleModal2(e) {
    modal1.classList.toggle('hide')
    form2.classList.toggle('login')

}

iconClose2.addEventListener('click', toggleModal2)
btnClose2.addEventListener('click', toggleModal2)
clickLogin.addEventListener('click', toggleModal2)
modal1.addEventListener('click', function (e) {
    if (e.target == e.currenTarget) {

    }
})





