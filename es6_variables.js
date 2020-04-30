/* 
    Differences Between the var and let Keywords
    if a variable declared with var keyword, it can by easyly overridden the name
    by declaring another variable with the same name
    
    var camper = "David"
    var camper = "Alen"

    but with es6 let keyword, you can only declare once with a uniqe name.
    if you say:
    let camper = "David"
    let camper = "Alen" -- this line throws an error.

    in a nutshell var is redeclarable, but let is not.

*/

var camper = "David";
var camper = "Alen";

console.log(camper);


let fighter = "Darbaz";
//let fighter = "Jack"; //SyntaxError: Identifier 'fighter' has already been declared

console.log(fighter);




/* 
    Scopes of the var and let Keywords

    When you declare a variable with the let keyword inside a block, statement, or expression, 
    its scope is limited to that block, statement, or expression.
*/


let arr = [];
for (var i = 0; i < 3; i++) {
    arr.push(i);
}

console.log(arr);
console.log(i);  // i has a global scope even it's inside a block expression


let arr2 = [];
for (let j = 0; j < 5; j++) {
    arr2.push(j);
}

console.log(arr2);
//console.log(j); // j is not defined because it's inside a block expression




/* 
    Read-Only Variable with the const Keyword
    const keyward allows you to assign a variable only once

    const cat = "Max";
    max = "Miaw" // throuws an error
*/

const cat = "Max";
//cat = "Miaww";





/* 
    Mutate an Array Declared with const
    declareing a var with const does not mean that the var is immutable, it means you cannot reassign it again

    const s = [5, 6, 7];
    s = [1, 2, 3]; // throws error, trying to assign a const
*/


const s = [5, 6, 7];
// s = [1, 2, 3]; you cannot do it that way

s[0] = 1;
s[1] = 2;
s[2] = 3;

console.log(s);





/* 
    Prevent Object Mutation
    const declaration alone doesn't really protect your data from mutation. 
    To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
*/


let obj = {
    name: "Darbaz",
    age: 28
}

obj.name = "Alan";
console.log(obj.name);


Object.freeze(obj);

obj.name = "New Name";
console.log(obj.name);



























