/* 
    Use Destructuring Assignment to Extract Values from Objects

    ES5 approach
    const user = { name: 'John Doe', age: 34 };

    const name = user.name; // name = 'John Doe'
    const age = user.age; // age = 34
*/

const user = { name: "John Doe", age: 34 };

const { name, age } = user;

console.log(name);
console.log(age);




/* 
    Use Destructuring Assignment to Assign Variables from Objects

    extract a property of an object and assign it to a new name;
*/

const { name: userName, age: userAge } = user;

console.log(userName);





/* 
    Use Destructuring Assignment to Assign Variables from Nested Objects
*/
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};



// extract low and high temps for today forecast as lowToday and highToday
const { today: { low: lowToday, high: highToday  }} = LOCAL_FORECAST;

console.log(highToday);
console.log(lowToday);





/* 
    Use Destructuring Assignment to Assign Variables from Arrays

*/

const [ a, b ] = [ 1, 2, 3, 4, 5];
console.log(a, b);

const [ c, d,,, e ] = [ 3, 4, 5, 6, 7 ];
console.log(e);



/* 
     Use Destructuring Assignment with the Rest Parameter to Reassign Array Elementss
*/

const [x, y, ...arr] = [ 1, 2, 3, 4, 5, 6];

console.log(x, y);
console.log(arr);


// create a func to remove the first 2 elements from an array
const source = [1,2, 3,4 , 5, 6, 7, 8, 9, 10];

const removeFirstTwo = list => {
    "use strict"
    const [a, b, ...arr ] = list;

    return arr;
}


console.log(removeFirstTwo(source));




/* 
    Use Destructuring Assignment to Pass an Object as a Function's Parameters
*/

const myObj = { name: 'Darbaz', age: 28 };

const profile = ( {name, age } ) => `${name} is ${age} year(s) old.`;

console.log(profile(myObj));






