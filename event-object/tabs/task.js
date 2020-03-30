'use strict';
const menus = document.querySelectorAll('div.tabs');
for (let k = 0; k < menus.length; k++) {
    const menu = menus[k];
    const tabs = menu.querySelectorAll('div.tab');
    const contents = menu.querySelectorAll('div.tab__content');

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        const content = contents[i];
        tab.addEventListener('click', function () {
            hideAllTabs();
            tab.className = 'tab tab_active';
            content.className = 'tab__content tab__content_active';
        })
    }

    function hideAllTabs() {
        for (let j = 0; j < contents.length; j++) {
            const content = contents[j];
            content.className = 'tab__content';
        }
    }
}
