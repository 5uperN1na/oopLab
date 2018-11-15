//Random Square Game using classes and methods

const MAX = 800;
let container = document.getElementById('square-container');

class Square {
    //constructor
    constructor(x, y, size) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${size}px`;
        this.div.style.height = `${size}px`;
        //binding the square to the div so update function can work
        //this.div.addEventListener('click', function () {
        //this.updateColor();
        // }.bind(this));

        //ES2016 arrow function and function context (constructor creating a div/square and arrow function refers to square)
        this.div.addEventListener('click', () => {
            console.log(this);
            this.updateColor();
            this.updateLocation();

        });

        this.updateColor();
        container.appendChild(this.div);

    }

    //method to randoming change color of square
    updateColor() {
        //let randomColor = `rb (117, 24, 32)`;
        let randomColor = `rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
        this.div.style.backgroundColor = randomColor;
    }

    //method to randoming change X and Y coordinates 
    updateLocation() {
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }


}
let sqButton = document.getElementById('square-button');
sqButton.addEventListener('click', insertSquare);


function insertSquare() {
    let xVal = randomVal(0, MAX);
    let yVal = randomVal(0, MAX);
    let size = randomVal(25, 100);
    let sq = new Square(xVal, yVal, size);
   
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}