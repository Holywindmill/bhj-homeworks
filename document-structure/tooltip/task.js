'use strict';
const chunks = document.querySelectorAll('a.has-tooltip');
const tooltip = document.querySelector('div.tooltip');
for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    chunk.onclick = function () {
        const x = Math.floor(chunk.getBoundingClientRect().x);
        const y = Math.floor(chunk.getBoundingClientRect().y + chunk.getBoundingClientRect().height);
        const title = chunk.title;
        if (Math.floor(tooltip.getBoundingClientRect().x) === x && Math.floor(tooltip.getBoundingClientRect().y) === y) {
            tooltip.style.display = 'none';
        } else {
            tooltip.style.left = x + 'px';
            tooltip.style.top = y + 'px';
            tooltip.innerHTML = title;
            tooltip.style.display = 'flex';
        }
        return false;
    }
}
