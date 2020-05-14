'use strict';
const form = document.querySelector('form.tasks__control');
const tasks = document.querySelector('div.tasks__list');
const input = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');


function addTask() {
    if (input.value.length > 0) {
        tasks.insertAdjacentHTML("beforeend",
            `<div class="task">` +
            `<div class="task__title">` +
            input.value +
            `</div>` +
            `<a href="#" class="task__remove">&times;</a>` +
            `</div>`);
        input.value = '';
        const removeButton = tasks.lastElementChild.querySelector('a.task__remove');
        removeButton.onclick = function () {
            tasks.removeChild(removeButton.parentNode)
        }
    }
}

function keyHandler(event) {
    if ((event.key === 'Enter')) {
        addTask();
    }
}

addButton.onclick = function () {
    addTask();
}

function submitHandler(event) {
    event.preventDefault();
}

form.addEventListener('submit', submitHandler);

input.addEventListener('keypress', keyHandler);
