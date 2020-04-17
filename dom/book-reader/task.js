'use strict';

const book = document.getElementById('book');
const fontSize = document.querySelectorAll('a.font-size');
const color = document.querySelectorAll('div.book__control_color a.color');
const bgColor = document.querySelectorAll('div.book__control_background a.color');

for (let i = 0; i < fontSize.length; i++) {
    let activeFontSize = fontSize[i];
    activeFontSize.onclick = function () {
        inactiveFont();
        activeFontSize.classList.add('font-size_active');
        if (this.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (this.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
        return false;
    };
}

for (let i = 0; i < color.length; i++) {
    let activeColor = color[i];
    activeColor.onclick = function () {
        inactiveColor();
        activeColor.classList.add('color_active');
        if (this.classList.contains('color_gray')) {
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        } else if (this.classList.contains('color_whitesmoke')) {
            book.classList.add('book_color-whitesmoke');
            book.classList.remove('book_color-gray');
        } else {
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        }
        return false;
    };
}

for (let i = 0; i < bgColor.length; i++) {
    let activeBgColor = bgColor[i];
    activeBgColor.onclick = function () {
        inactiveBgColor();
        activeBgColor.classList.add('color_active');
        if (this.classList.contains('color_gray')) {
            book.classList.add('book_bg-gray');
            book.classList.remove('book_bg-black');
        } else if (this.classList.contains('color_white')) {
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-black');
        } else {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-gray');
        }
        return false;
    };
}

function inactiveFont() {
    for (let i = 0; i < fontSize.length; i++) {
        const oneFontSize = fontSize[i];
        oneFontSize.classList.remove('font-size_active');
    }
}

function inactiveColor() {
    for (let i = 0; i < color.length; i++) {
        const oneActiveColor = color[i];
        oneActiveColor.classList.remove('color_active');
    }
}

function inactiveBgColor() {
    for (let i = 0; i < bgColor.length; i++) {
        const oneActiveBgColor = bgColor[i];
        oneActiveBgColor.classList.remove('color_active');
    }
}
