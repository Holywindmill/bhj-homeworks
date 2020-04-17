'use strict';

const rotators = document.querySelectorAll('span.rotator');

function rotatorChange(rotator) {
    const activeCase = rotator.querySelector('span.rotator__case_active');
    let nextCase;
    if (activeCase.nextElementSibling === null) {
        nextCase = rotator.firstElementChild;
    } else {
        nextCase = activeCase.nextElementSibling;
    }
    activeCase.classList.remove("rotator__case_active")
    nextCase.classList.add("rotator__case_active");
    nextCase.style.color = nextCase.dataset.color;
    setTimeout(rotatorChange, parseInt(nextCase.dataset.speed), rotator);
}

function initRotator(rotator) {
    const activeCase = rotator.querySelector('span.rotator__case_active');
    activeCase.style.color = activeCase.dataset.color;
    setTimeout(rotatorChange, parseInt(activeCase.dataset.speed), rotator);
}

for (let i = 0; i < rotators.length; i++) {
    const rotator = rotators[i];
    initRotator(rotator);
}
