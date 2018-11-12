//Random Square Game using classes and methods

class Square {
    constructor(x, y) {
        this.div = createElement('div');
        this.div.classList.add('square');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;

    }

    updateColor() {
        //let randomColor = `rb (124, 117, 255)`;
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
    }

}
let sqButton = document.getElementById('square-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare() {
    alert("works!");

}

function randomVal(min, max) {
    return Math.floor(Math.random() + (max - min)) + min;

}