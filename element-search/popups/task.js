'use strict';
const main = document.getElementById('modal_main');
const close_main = main.getElementsByClassName('modal__close_times')[0];
const show_success = main.getElementsByClassName('show-success')[0];

main.className = main.className + ' modal_active';
close_main.onclick = function () {
    main.className = 'modal';
};

const success = document.getElementById('modal_success');
const close_success = success.getElementsByClassName('modal__close_times')[0];

show_success.onclick = function () {
    main.className = 'modal';
    success.className = success.className + ' modal_active';
};
close_success.onclick = function () {
    success.className = 'modal';
};