import  './style.scss';
import { initSwiper } from './js/init-swiper.js'

document.addEventListener('DOMContentLoaded', () => {
    initSwiper()
    window.addEventListener('resize', initSwiper)
})

const readMoreFirst = document.getElementById('readMoreFirst');
const readMoreBefore = document.querySelector('.read-more');
const mobileHiddenText = document.querySelector('.text-content__paragraph--mobile-hidden');
const tabletHiddenText = document.querySelector('.text-content__paragraph--tablet-hidden');
const desktopHiddenText = document.querySelector('.text-content__paragraph--hidden');


readMoreFirst.addEventListener('click', function (evt) {
    evt.preventDefault();
    const currentText = readMoreFirst.textContent.trim();

    if (currentText === 'Читать далее') {
        readMoreFirst.textContent = 'Скрыть';
        readMoreBefore.classList.add('active');
    } else {
        readMoreFirst.textContent = 'Читать далее';
        readMoreBefore.classList.remove('active');
    }

    // Просто переключаем классы
    mobileHiddenText.classList.toggle('text-content__paragraph--mobile-hidden');
    tabletHiddenText.classList.toggle('text-content__paragraph--tablet-hidden');
    desktopHiddenText.classList.toggle('text-content__paragraph--hidden');
});


const readMoreSecond = document.getElementById('readMoreSecond');
const cardListBrands = document.querySelector('.card-section--brand');
const hiddenTemplate = cardListBrands.querySelector('.card-list--hidden');


readMoreSecond.addEventListener('click', function (evt) {
    evt.preventDefault();
    const currentText = readMoreSecond.textContent.trim();

    if (currentText === 'Показать все') {
        readMoreSecond.textContent = 'Скрыть';
        readMoreSecond.classList.add('active');
        hiddenTemplate.classList.remove('card-list--hidden');


    } else {
        readMoreSecond.textContent = 'Показать все';
        readMoreSecond.classList.remove('active');
        hiddenTemplate.classList.add('card-list--hidden');

    }
})

const readMoreThird = document.getElementById('readMoreThird');
const cardListRepair = document.querySelector('.card-section--repair');
const hiddenTemplateRepair = cardListRepair.querySelector('.card-list--hidden');


readMoreThird.addEventListener('click', function (evt) {
    evt.preventDefault();
    const currentText = readMoreThird.textContent.trim();

    if (currentText === 'Показать все') {
        readMoreThird.textContent = 'Скрыть';
        readMoreThird.classList.add('active');
        hiddenTemplateRepair.classList.remove('card-list--hidden');


    } else {
        readMoreThird.textContent = 'Показать все';
        readMoreThird.classList.remove('active');
        hiddenTemplateRepair.classList.add('card-list--hidden');
    }
})

const buttonsOrder = document.querySelectorAll('.button--order');
for (let i = 0; i < buttonsOrder.length; i++) {

    let buttonOrderText = document.createElement('span');
    buttonOrderText.textContent = 'заказать';
    buttonsOrder[i].appendChild(buttonOrderText);

    let buttonOrderArrow = document.createElement('img');
    buttonOrderArrow.src = 'img/dropdown2.svg';
    buttonsOrder[i].appendChild(buttonOrderArrow);
}

