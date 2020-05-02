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

