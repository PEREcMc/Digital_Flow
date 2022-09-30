// menu
const navMenu = document.querySelector('.nav__menu');
const menuOpenBtn = document.querySelector('.menu-open');
const menuCloseBtn = document.querySelector('.menu-close');

menuOpenBtn.addEventListener('click', function () {
    navMenu.classList.remove('hidden');
    navMenu.classList.remove('menuClose');
    navMenu.classList.add('menuOpen');
})

menuCloseBtn.addEventListener('click', function () {
    navMenu.classList.remove('menuOpen');
    navMenu.classList.add('menuClose');
    setTimeout( () => {
        navMenu.classList.add('hidden');
    }, 350)
})

// popup
const requestForm = document.querySelector('.request__form');
const requestButton = document.querySelector('.request__button');
const popup = document.getElementById('popup');
const popupButton = document.querySelector('.popup__button');
const body = document.getElementById('body');

function openPopup(e) {
    e.preventDefault();
    popup.classList.remove('hidden');
    body.style.overflow = 'hidden';
}

function closePopup() {
    popup.classList.add('hidden');
    const inputs = requestForm.querySelectorAll('[placeholder]');
    inputsArr = Array.from(inputs);
    inputsArr.forEach( elem => {
        elem.value = '';
    })
    body.style.overflow = 'visible';
}

requestForm.addEventListener('submit', openPopup);
// popup.addEventListener('click', closePopup);

popupButton.addEventListener('click', function() {
    popup.querySelector('.popup__wrapper').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    closePopup();
});
