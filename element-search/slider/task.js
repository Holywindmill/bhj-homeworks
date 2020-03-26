'use strict';
const arrows = document.getElementsByClassName('slider__arrow');
const prev = arrows[0];
const next = arrows[1];
const slides = document.querySelectorAll('div.slider__item');
var currentSlide = 0;
var prevSlide;
var nextSlide;
prev.onclick = function () {
    if (currentSlide === 0) {
        prevSlide = slides.length - 1;
    } else {
        prevSlide = currentSlide - 1;
    }
    slides[currentSlide].className = "slider__item";
    slides[prevSlide].className = "slider__item slider__item_active";
    currentSlide = prevSlide;
};

next.onclick = function () {
    if (currentSlide + 1 === slides.length) {
        nextSlide = 0;
    } else {
        nextSlide = currentSlide + 1;
    }
    slides[currentSlide].className = "slider__item";
    slides[nextSlide].className = "slider__item slider__item_active";
    currentSlide = nextSlide;
};
