/* 
    Creating strings with Template Leterals
*/

const user = { name: "John", age: 24 };

const profile = ( {name, age } ) => `My name is ${name}, and I'm ${age} years old.`

console.log(profile(user));





/* 
    Write Concise Object Literal Declarations Using Object Property Shorthand
*/

//const getMousePosition = ( x, y ) => ({ x: x, y: y});
// becomes
const getMousePosition = ( x, y ) => ({ x, y });

