const num1 = 400
console.log(num1);

//explicitly define or tell that i want only Number-type variable
let num2 = new Number(8754.6470)

// console.log(num2.toString());       //convert into String
// console.log(num2.toString().length);       //can use String's prototypes

console.log(num2.toFixed(2));   // round of to 2 DPs for floats , add 2 decimals to integers ----> focus on digits after decimal

console.log(num2.toPrecision(3));

let num3 = 4000000
console.log(num3.toLocaleString('en-IN'));

