//oop

const me = {
    name: 'james',
    age: 27
}

class Person { // A class is a blueprint for creating objects
    constructor(name, age) { // constructor is a special method for creating and initializing an object created with a class
        this.name = name; // this keyword refers to the current object
        this.age = age; // age is a property of the class
    }

    greet() { // greet is a method of the class
        console.log('Hello my name is ', this.name) // this.name refers to the name property of the class
    }
}

const you = new Person('rufus', 24) // new keyword creates a new object from a class
const them = new Person('doloris', 31) 

console.log(you.age) // 24
them.greet() // Hello my name is doloris

class Gamer extends Person { // Gamer class extends Person class and inherits its properties and methods
    constructor(name, age, videogame) { // properties of the Gamer class and the Person class
        super(name, age) // super keyword calls the constructor of the parent class
        this.videogame = videogame // videogame is a property of the Gamer class
    }
}

const nerdyGuy = new Gamer('harold', 31, 'pokemon') // new object from the Gamer class
nerdyGuy.videogame = 'world of warcraft' // change the value of the videogame property
console.log(nerdyGuy) // Gamer { name: 'harold', age: 31, videogame: 'world of warcraft' }

// getters and setters
class MyClass {
    constructor(name) {
        this._name = name // _name is a private property
    }

    get name() { // get keyword defines a getter method
        console.log('Fetched current name')
        return this._name // returns the value of the private property
    }

    set name(value) { // set keyword defines a setter method
        this._name = value // sets the value of the private property
    }
}

const obj = new MyClass('lucy') // new object from the MyClass class
console.log(obj.name) // Fetched current name, lucy

obj.name = 'gregory' // set the value of the private property
console.log(obj.name) // Fetched current name, gregory