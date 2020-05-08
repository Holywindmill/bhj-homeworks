'use strict';
const form = document.querySelector('form.tasks__control');
const tasks = document.querySelector('div.tasks__list');
const input = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');


function addTask() {
    if (input.value.length > 0) {
        tasks.innerHTML =
            tasks.innerHTML +
            `<div class="task">` +
            `<div class="task__title">` +
            input.value +
            `</div>` +
            `<a href="#" class="task__remove">&times;</a>` +
            `</div>`;
        input.value = '';
        removeButtonsHandler();
    }
}

function removeButtonsHandler() {
    const removeButtons = document.querySelectorAll('a.task__remove');
    console.log(removeButtons)
    for (let i = 0; i < removeButtons.length; i++) {
        const removeButton = removeButtons[i];
        removeButton.onclick = function () {
            tasks.removeChild(removeButton.parentNode)
        }
    }
}

function keyHandler(event) {
    console.log(event)
    if ((event.key === 'Enter')) {
        addTask();
    }
}

addButton.onclick = function () {
    addTask();
}

function submitHandler(event) {
    console.log(event)
    event.preventDefault();
}

form.addEventListener('submit', submitHandler);

input.addEventListener('keypress', keyHandler);
