'use strict';
const tooltips = document.querySelectorAll('a.has-tooltip');
for (let i = 0; i < tooltips.length; i++) {
    const tooltip = tooltips[i];
    tooltip.onclick = function () {
        const divs = tooltip.querySelectorAll('div.tooltip');
        if (divs.length > 0) {
            for (let j = 0; j < divs.length; j++) {
                tooltip.removeChild(divs[j]);
            }
        } else {
            tooltip.insertAdjacentHTML('beforeend', '<div class="tooltip" style="position: absolute; display: flex">' +
                tooltip.title +
                '</div>')
        }
        return false;
    }
}
