'use strict';

function numberOfCases(rotator) {
    return rotator.querySelectorAll('span.rotator__case').length;
}

function activeCase(rotator) {
    const rotatorCases = rotator.querySelectorAll('span.rotator__case');
    for (let j = 0; j < rotatorCases.length; j++) {
        const rotatorCase = rotatorCases[j];
        if (rotatorCase.classList.contains('rotator__case_active')) {
            return j;
        }
    }
    return 0;
}

function hideCase(rotator, n) {
    const rotatorCases = rotator.querySelectorAll('span.rotator__case');
    rotatorCases[n].classList.remove('rotator__case_active')
}

function showCase(rotator, n) {
    const rotatorCases = rotator.querySelectorAll('span.rotator__case');
    rotatorCases[n].classList.add('rotator__case_active');
}

function rotatorChange() {
    const rotators = document.querySelectorAll('span.rotator');
    for (let i = 0; i < rotators.length; i++) {
        const rotator = rotators[i];
        const a = numberOfCases(rotator);
        const n = activeCase(rotator);
        hideCase(rotator, n);
        if (n < (a - 1)) {
            showCase(rotator, n + 1);
        } else {
            showCase(rotator, 0);
        }

    }
    console.log('hi')
}

setInterval(rotatorChange, 1000);