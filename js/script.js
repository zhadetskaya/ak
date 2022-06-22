function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

let tell = document.querySelector('.tell-me');
let popup = document.querySelector('.popup');
let popupBg = document.querySelector('.popup__bg');
let close = document.querySelector('.close');
let more = document.querySelector('.more__btn');
let items = document.querySelector('.main__items');
let itemsBg = document.querySelector('.main__items-wrapper');
let burger = document.querySelector('.burger');
let info = document.querySelector('.header__info');
let menu = document.querySelector('.menu__items');
let menuM = document.querySelector('.menu');
let header = document.querySelector('.header');
let closes = document.querySelector('.closes');

function modal() {
 tell.addEventListener('click', ()=>{
     popup.style.display = "block";
     popupBg.style.display = "flex";
     document.body.style.overflow = 'hidden';
 })
}


function closeModal() {
    close.addEventListener('click', ()=>{
        popup.style.display = "none";
        popupBg.style.display = "none";
        document.body.style.overflow = '';
    })
}


function moreModal() {
    more.addEventListener('click', ()=>{
        items.classList.toggle('active');
        itemsBg.classList.toggle('active');
    })
}
function openBurger() {
    burger.addEventListener('click', ()=>{
        document.body.style.overflow = 'hidden';
        info.classList.add('active');
        menu.classList.toggle('active');
        header.classList.toggle('menu-bg');
        burger.style.display= "none";
        menuM.classList.add('current');
    })
}
function closesModal() {
    closes.addEventListener('click', ()=>{
        popup.style.display = "none";
        popupBg.style.display = "none";
        document.body.style.overflow = '';
        info.classList.remove('active');
        menu.classList.toggle('active');
        header.classList.toggle('menu-bg');
        burger.style.display= "block";
        menuM.classList.remove('current');
    })
}
modal();
closeModal();
moreModal();
openBurger();
closesModal();
