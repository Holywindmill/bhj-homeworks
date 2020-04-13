'use strict';
function isInViewport(element) {
    if (element.getBoundingClientRect().bottom < 0) {
        return false;
    } else if (element.getBoundingClientRect().top > window.innerHeight) {
        return false;
    } else {
        return true;
    }
}
window.addEventListener("scroll", function () {
    const rectangles = document.querySelectorAll('div.reveal');
    for (let i = 0; i < rectangles.length; i++) {
        const rectangle = rectangles[i];
        if (isInViewport(rectangle)) {
            rectangle.className = "reveal reveal_active"
        } else {
            rectangle.className = "reveal"
        }
    }
});