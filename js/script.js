"use strict";

(function () {
  var slides = document.querySelectorAll('.slider__item'),
      btnPrev = document.querySelector('.slider__btn-prev'),
      btnNext = document.querySelector('.slider__btn-next');

  var currentSlide = 0;

  btnPrev.addEventListener('click', function() {
    goToSlide(currentSlide - 1);
  }, false);
  btnNext.addEventListener('click', function() {
    goToSlide(currentSlide + 1);
  }, false);

  var goToSlide = function(n) {
    currentSlide = (n + slides.length) % slides.length;

    [].forEach.call(slides, function (containerItem) {
      containerItem.classList.remove('slider__item--behind');
      containerItem.classList.remove('slider__item--front');
    });

    slides[currentSlide].classList.add('slider__item--behind');
    slides[(currentSlide + 1) % slides.length].classList.add('slider__item--front');
    console.log(currentSlide)
  }
})();