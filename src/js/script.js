import Swiper from "./swiper-bundle.js";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 24,
      allowSlideNext: false,
      allowSlidePrev: false
    },
    1120: {
      spaceBetween: 32,
      allowSlideNext: false,
      allowSlidePrev: false
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let repairBrandsButtonMore = document.querySelector('.repair-brands__button-more');

repairBrandsButtonMore.addEventListener('click', function () {
  let wrapper = document.querySelector('.repair-brands__swiper-wrapper');
  if (wrapper.classList.contains('repair-brands__swiper-wrapper--hidden')) {
    wrapper.classList.remove('repair-brands__swiper-wrapper--hidden');
    repairBrandsButtonMore.textContent = 'Скрыть';
    repairBrandsButtonMore.classList.add('repair-brands__button-more--rotate');
  } else {
    wrapper.classList.add('repair-brands__swiper-wrapper--hidden');
    repairBrandsButtonMore.textContent = 'Показать всё';
    repairBrandsButtonMore.classList.remove('repair-brands__button-more--rotate');
  }
});

let repairTechnicsButtonMore = document.querySelector('.repair-technics__button-more');

repairTechnicsButtonMore.addEventListener('click', function () {
  let wrapper = document.querySelector('.repair-technics__swiper-wrapper');
  if (wrapper.classList.contains('repair-technics__swiper-wrapper--hidden')) {
    wrapper.classList.remove('repair-technics__swiper-wrapper--hidden');
    repairTechnicsButtonMore.textContent = 'Скрыть';
    repairTechnicsButtonMore.classList.add('repair-technics__button-more--rotate');
  } else {
    wrapper.classList.add('repair-technics__swiper-wrapper--hidden');
    repairTechnicsButtonMore.textContent = 'Показать всё';
    repairTechnicsButtonMore.classList.remove('repair-technics__button-more--rotate');
  }
});

let companyInfoButtonMore = document.querySelector('.company-info__button-more');

companyInfoButtonMore.addEventListener('click', function () {
  let wrapper = document.querySelector('.company-info__text');
  if (wrapper.classList.contains('company-info__text--hidden')) {
    wrapper.classList.remove('company-info__text--hidden');
    companyInfoButtonMore.textContent = 'Скрыть';
    companyInfoButtonMore.classList.add('company-info__button-more--rotate');
  } else {
    wrapper.classList.add('company-info__text--hidden');
    companyInfoButtonMore.textContent = 'Показать всё';
    companyInfoButtonMore.classList.remove('company-info__button-more--rotate');
  }
});

let blur = document.querySelector('.blur');

let burgerButton = document.querySelector('.button-link__logo--burger');

let mobileMenu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', function () {
  let wrapper = document.querySelector('.mobile-menu');
  if (wrapper.classList.contains('mobile-menu--hidden')) {
    wrapper.classList.remove('mobile-menu--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '5';
  }
});

function closeMenu() {
  let wrapper = document.querySelector('.mobile-menu');
  if (!wrapper.classList.contains('mobile-menu--hidden')) {
    wrapper.classList.add('mobile-menu--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '-1';
  }
}

function openCallModal() {
  let wrapper = document.querySelector('.modal-call');
  if (wrapper.classList.contains('modal-call--hidden')) {
    wrapper.classList.remove('modal-call--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
  }
}

function closeCallModal() {
  let wrapper = document.querySelector('.modal-call');
  if (!wrapper.classList.contains('modal-call--hidden')) {
    wrapper.classList.add('modal-call--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

function openFeedbackModal() {
  let wrapper = document.querySelector('.modal-feedback');
  if (wrapper.classList.contains('modal-feedback--hidden')) {
    wrapper.classList.remove('modal-feedback--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
  }
}

function closeFeedbackModal() {
  let wrapper = document.querySelector('.modal-feedback');
  if (!wrapper.classList.contains('modal-feedback--hidden')) {
    wrapper.classList.add('modal-feedback--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

function closeAllWindows() {
  closeMenu();
  closeCallModal();
  closeFeedbackModal();
}

let openModalCallButton = document.querySelector('.mobile-button-link__btn--call');

openModalCallButton.addEventListener('click', openCallModal);

let headerOpenModalCallButton = document.querySelector('.button-link__logo--call');

headerOpenModalCallButton.addEventListener('click', openCallModal);

let closeModalCallButton = document.querySelector('.modal-call__btn--close');

closeModalCallButton.addEventListener('click', closeCallModal);

let openModalFeedbackButton = document.querySelector('.mobile-button-link__btn--chat');

openModalFeedbackButton.addEventListener('click', openFeedbackModal);

let headerOpenModalFeedbackButton = document.querySelector('.button-link__logo--chat');

headerOpenModalFeedbackButton.addEventListener('click', openFeedbackModal);

let closeModalFeedbackButton = document.querySelector('.modal-feedback__btn--close');

closeModalFeedbackButton.addEventListener('click', closeFeedbackModal);

let closeMenuButton = document.querySelector('.mobile-button-link__btn--close');

closeMenuButton.addEventListener('click', closeMenu );

blur.addEventListener('click', closeAllWindows);
