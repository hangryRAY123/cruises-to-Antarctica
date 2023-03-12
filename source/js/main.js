import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {lazySizes} from './vendor/lazysizes';

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

  navLink.forEach((e) => {
    e.addEventListener('click', function () {
      nav.style.right = '-100%';
      logo.style.opacity = '1';
      wrapper.classList.remove('overlay');
    });
  });

  btnOpen.addEventListener('click', function () {
    logo.style.opacity = '0';
    nav.style.right = '0';
    wrapper.classList.add('overlay');
  });

  btnClose.addEventListener('click', function () {
    logo.style.opacity = '1';
    nav.style.right = '-100%';
    wrapper.classList.remove('overlay');
  });

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
