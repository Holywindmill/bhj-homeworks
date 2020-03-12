function getHole(index) {
    return document.getElementById('hole' + index);
}

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1;
            if (dead.textContent >= 10) {
                dead.textContent = 0;
                lost.textContent = 0;
                alert('Вы победили!')
            }
        } else {
            lost.textContent = parseInt(lost.textContent) + 1;
            if (lost.textContent >= 5) {
                dead.textContent = 0;
                lost.textContent = 0;
                alert('Вы проиграли!')
            }
        }
    }
}