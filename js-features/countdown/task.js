const addText = function () {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;
    if (timer.textContent <= 0) {
        clearInterval(timerId1);
        setTimeout(winner, 1000);
    }
}
let timerId1 = setInterval(addText, 1000)
const winner = function () {
    alert('Вы победили в конкурсе!')
}

