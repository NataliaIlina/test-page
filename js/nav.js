'use strict';

(function () {
  var nav = document.querySelector('.main-nav');
  var navToggle = nav.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    nav.classList.toggle('main-nav--close');
    navToggle.classList.toggle('main-nav__toggle--close');
  });
})();
