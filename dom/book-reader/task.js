'use strict';

const book = document.getElementById('book');
const fontSize = document.querySelectorAll('a.font-size');
for (let i = 0; i < fontSize.length; i++) {
    let activeFontSize = fontSize[i];
    activeFontSize.onclick = function () {
        inactive();
        activeFontSize.classList.add('font-size_active');
        if (this.classList.contains('font-size_small')) {
            book.className = 'book book_fs-small';
        } else if (this.classList.contains('font-size_big')) {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';
        }
        return false;
    };
}

function inactive() {
    for (let j = 0; j < fontSize.length; j++) {
        const oneFontSize = fontSize[j];
        oneFontSize.classList.remove('font-size_active');
    }
}