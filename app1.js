//Random Square Game using classes and methods

const MAX = 800;
let container = document.getElementById('square-container');

class Square {
    //constructor
    constructor(x, y) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.updateColor();
        container.appendChild(this.div);

    }

    //method
    updateColor() {
        //let randomColor = `rb (117, 24, 32)`;
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randomColor;
    }

}
let sqButton = document.getElementById('square-button');
sqButton.addEventListener('click', insertSquare);

function insertSquare() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
    let sq = new Square(xVal, yVal);

}

function randomVal(min, max) {
    return Math.floor(Math.random() + (max - min)) + min;

}