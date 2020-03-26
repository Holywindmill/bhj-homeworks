'use strict';
const items = document.querySelectorAll('ul li.menu__item');
for (var i = 0; i < items.length; i++) {
    const item = items[i];
    const menuLink = item.querySelector('a.menu__link');
    const menuSub = item.querySelector('ul.menu_sub');
    if (menuSub !== null) {
        menuLink.onclick = function () {
            // hide all menus
            const allSubs = document.querySelectorAll('ul.menu_sub');
            for (var i = 0; i < allSubs.length; i++) {
                const subItem = allSubs[i];
                subItem.className = 'menu menu_sub';
            }

            // show required menu
            menuSub.className = menuSub.className + ' menu_active';

            return false;
        }
    }
}
