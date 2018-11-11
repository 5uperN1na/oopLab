//example 1
let p1 = {
    name: 'James',
    sayHello: function () {
        alert(`Hi! I am ${this.name}.`);
    }
};
let p2 = {
    name: 'Jacinda',
    sayHello: function () {
        alert(`Hi! I am ${this.name}.`);
    }
};
p1.sayHello();
p2.sayHello();

//Pseudo-Class example
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    alert('Hello my name is ' +
        this.name + '! I am ' + this.age + 'years old.');
}
let p11 = new Person('Jane', 29);
p11.sayHello();

//example 2

// constructor
function Person(name, age) {
    // set properties using this.propName syntax
    this.name = name;
    this.age = age;
}

//method example 1
Person.prototype.sayHello = function () {
    alert('Hello my name is ' +
        this.name + '! I am ' + this.age + 'years old.');
}


//method example 2
Person.prototype.sleep = function () {
    alert('Goodnight.  I am going to bed.  And I am ' +
        this.name + '! I am ' + this.age + 'years old.');
}

let person1 = new Person('Holly', 29);
let person2 = new Person('Bob', 28);
person1.sayHello();
person2.sayHello();

person1.sleep();
person2.sleep();

//ES2015 Class Syntax

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert(`Hello my name is
   ${this.name}! I am ${this.age} years old.`);
    }
}
let pp1 = new People('Larry', 40);
pp1.sayHello();
