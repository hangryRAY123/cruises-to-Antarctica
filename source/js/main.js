import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {lazySizes} from './vendor/lazysizes';
import {FocusLock} from './utils/focus-lock';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const btnClose = document.querySelector('[data-validate="btn-close"]');
  const btnOpen = document.querySelector('[data-validate="btn-open"]');
  const nav = document.querySelector('[data-validate="nav"]');
  const wrapper = document.querySelector('[data-validate="wrapper"]');
  const logo = document.querySelector('[data-validate="logo"]');
  const navLink = document.querySelectorAll('[data-validate="nav-link"]');
  const control = document.querySelector('[data-validate="control"]');
  const submit = document.querySelector('[data-validate="submit"]');
  const data = document.querySelector('[data-validate="data"]');
  const picture = document.querySelectorAll('[data-validate="picture"]');
  const overlay = document.querySelector('[data-validate="overlay"]');
  const body = document.querySelector('body');
  const isEscapeKey = (key) => key === 'Escape';
  let focus = new FocusLock();

  wrapper.classList.remove('wrapper--nojs');
  submit.disabled = 'disabled';
  data.checked = '';
  data.disabled = '';
  picture.forEach((e) => {
    e.style.display = 'block';
  });

  control.addEventListener('click', function () {
    if (data.checked) {
      submit.disabled = '';
    } else {
      submit.disabled = 'disabled';
    }
  });

  const navClose = () => {
    logo.style.opacity = '1';
    nav.style.right = '-100%';
    body.style.overflow = '';
    overlay.classList.remove('header__nav--active');
    document.removeEventListener('keydown', onEscKeydown);
    focus.unlock();
  };

  const navOpen = () => {
    logo.style.opacity = '0';
    nav.style.right = '0';
    overlay.classList.add('header__nav--active');
    body.style.overflow = 'hidden';
    document.addEventListener('keydown', onEscKeydown);
    focus.lock('.header__nav.header__nav--active');
  };

  navLink.forEach((e) => {
    e.addEventListener('click', function () {
      navClose();
    });
  });

  function onEscKeydown(evt) {
    if (isEscapeKey(evt.key)) {
      evt.preventDefault();
      navClose();
      focus.unlock();
    }
  }

  nav.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  btnOpen.addEventListener('click', navOpen);
  btnClose.addEventListener('click', navClose);
  overlay.addEventListener('click', navClose);

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    lazySizes();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
