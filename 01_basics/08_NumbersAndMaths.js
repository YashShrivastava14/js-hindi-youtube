const num1 = 400
console.log(num1);

//explicitly define or tell that i want only Number-type variable
let num2 = new Number(8754.6470)

// console.log(num2.toString());       //convert into String
// console.log(num2.toString().length);       //can use String's prototypes

console.log(num2.toFixed(2));   // round of to 2 DPs for floats , add 2 decimals to integers ----> focus on digits after decimal

let preciseNum = num2.toPrecision(3)
 console.log( preciseNum)
// console.log( preciseNum.length);

let num3 = 4000000
console.log(num3.toLocaleString('en-IN'));  // separate with commas

// let bigNum = (Number.MAX_VALUE)*2       //result infinity
 let bigNum = (Number.MAX_VALUE)+100     //will not impact as it is not sufficient large number
console.log(bigNum);

let pi = 3
console.log(Number.isInteger(pi));

console.log("++++++++++++++++++++++++ Maths Library +++++++++++++++++++++++++");

// ++++++++++++++++++++++++ Maths Library +++++++++++++++++++++++++

// console.log(Math.abs(-99));     //changes -ve to +ve
// console.log(Math.round(5.5));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.5));
// console.log(Math.sqrt(5.5));
// console.log(Math.min(5,4,6,7,8,9,11));
// console.log(Math.max(5,4,6,7,8,9,11));
let min = 15
let max = 25 
let randomValue = Math.random()*10  +min
console.log(Math.floor(randomValue));

let rv = Math.random()*(max-min+1) + min
console.log(Math.floor(rv));




