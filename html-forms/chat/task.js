'use strict';
const widget = document.querySelector('div.chat-widget');
const messages = document.querySelector('.chat-widget__messages');

widget.onclick = function () {
    widget.classList.add('chat-widget_active');
}

function postMessage() {
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    messages.innerHTML =
        messages.innerHTML +
        `<div class="message message_client"><div class="message__time">` +
        time +
        `</div><div class="message__text">` +
        input.value +
        `</div></div> `;
    input.value = '';
}

const input = document.getElementById('chat-widget__input');

const robotMessages = Array('Не пишите нам больше!',  'Добрый день!', 'Пришлите номер заказа', 'Это опять вы?', 'К сожалению, все операторы заняты', 'Обращайтесь в следующем году','Ничем не могу помочь')

const widgetWindow = document.getElementById('chat-widget__messages');

function keyHandler(event) {
    console.log(event)
    if ((event.key === 'Enter') && (input.value.length > 0)) {
        postMessage();
        widgetWindow.scrollIntoView({block: "end"});
        robotMessage();
        widgetWindow.scrollIntoView({block: "end"});
    }
}
function robotMessage() {
    const robotMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
    const time = new Date().getHours() + ":" + new Date().getMinutes();
    messages.innerHTML =
        messages.innerHTML +
        `<div class="message"><div class="message__time">` +
        time +
        `</div><div class="message__text">` +
        robotMessage +
        `</div></div> `;
}

input.addEventListener('keypress', keyHandler);


