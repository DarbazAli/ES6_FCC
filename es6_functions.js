/* 
    Use Arrow Functions to Write Concise Anonymous Functions
    When there is no function body, and only a return value, 
    arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
    This helps simplify smaller functions into one-line statements:
*/

const magic = () => new Date();

console.log(magic());




/* 
    Write Arrow Functions with Parameters

    If an arrow function has a single argument, the parentheses enclosing the argument may be omitted.

    It is possible to pass more than one argument into an arrow function.

*/

// Arrow function with 1 argument
const dubbler = number => number * 2;


// Arrow function with more that 1 arguments
const concatArr = (arr1, arr2) => arr1.concat(arr2);


console.log(dubbler(2));
console.log(concatArr([1, 2], [3, 4]));



/* 
    Set Default Parameters for Your Functions
    The default parameter kicks in when the argument is not specified (it is undefined).
*/

const greeting = ( name = "Anonymos" ) => "Hello " + name;

console.log(greeting("Darbaz"));
console.log(greeting());


const increament = (number, value = 1) => number + value;

console.log(increament(2, 2));




/* 
    Use the Rest Parameter with Function Parameters

*/

const countArgs = (...args ) => args.length;

console.log(countArgs(1, 3, 5));


const sum = (...args) => args.reduce( (a, b) => a + b, 0);

console.log(sum(1, 2, 4));




/* 
    Use the Spread Operator to Evaluate Arrays In-Place
    ...arr returns an unpacked array. In other words, it spreads the array. 
    However, the spread operator only works in-place, like in an argument to a function or in an array literal. 
*/

const myArr = [2, 4, 0, -2, 7];

console.log(Math.max(myArr));
console.log(Math.max(...myArr));

// copying an array with spread operater

const myArr2 = [...myArr];
console.log(myArr2);



