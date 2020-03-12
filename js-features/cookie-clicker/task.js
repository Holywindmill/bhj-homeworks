const counter = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');

function changeSize() {
    if (image.width == 100) {
        image.width = 200;
    } else {
        image.width = 100;
    };
    counter.textContent = parseInt(counter.textContent) + 1;
}

image.onclick = changeSize;