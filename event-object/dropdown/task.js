'use strict';

const dropdowns = document.querySelectorAll('div.dropdown');
for (let j = 0; j < dropdowns.length; j++) {
    const dropdown = dropdowns[j];

    const value = dropdown.querySelector('div.dropdown__value');
    const list = dropdown.querySelector('ul.dropdown__list');
    const links = dropdown.querySelectorAll('a.dropdown__link');

    value.addEventListener('click', function () {
        if (list.className === 'dropdown__list') {
            list.className = 'dropdown_list dropdown_list_active'
        } else {
            list.className = 'dropdown__list';
        }
    });

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.onclick = function () {
            return false;
        };
        link.addEventListener('click', function () {
            value.textContent = link.textContent;
            list.className = 'dropdown__list';
        });
    }
}