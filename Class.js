/* 
    Use class Syntax to Define a Constructor Function

*/

class Person {
    constructor(name) {
        this.name = name;
    }
}

const me = new Person("John Do")
console.log(me.name);



// Getters and Setters

class Book {
    constructor(author) {
        this._author = author
    }

    // getter
    get writer() {
        return this._author;
    }

    set writer(updateWriter) {
        this._author = updateWriter;
    }
}


const myBook = new Book("Victore");
console.log(myBook.writer);

myBook.writer = "Mac";

console.log(myBook.writer);





class Thermostat {
    constructor(temp) {
        this._temp = temp;
    }

    get temperature() {
        return ( 5 / 9 * (this._temp - 32 ));
    }

    set temperature(newTemp) {
        this._temp = newTemp;
    }
}



const myTemp = new Thermostat(76);

console.log(myTemp.temperature);

myTemp.temperature = 26;

console.log(myTemp.temperature);
