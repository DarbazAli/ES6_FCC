/* 
    Write Concise Declarative Functions with ES6
    it's a pwoerful way to write functions inside an object
*/

const person = {
    name: "John",
    sayHello() {
        return `Hello ${this.name}`;
    }
}


console.log(person.sayHello());



