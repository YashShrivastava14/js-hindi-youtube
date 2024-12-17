// Datatypes are classified into two types :--
// 1. Primitve (Call by value- copy of data is passed not the actual reference)
//     There are seven primitive DTs :- number, String , Boolean, null , undefined, Symbol , 
//      bigInt


const num = 14;
let isLoggedIn = true;
let Name = "yash";
let temperature = null;
let mob;

let id = Symbol('1234')
let anotherId = Symbol('1234')
console.log(id === anotherId);
console.log(typeof id);
console.log(anotherId);

let bigNumber = 999999999999999988776655444332n
console.log( typeof bigNumber);



// 2. Non Primitive DTs (Reference)
//    Arrays, Objects , Function

let numArray = [14,15,16,"yash",null,'null']
console.log( typeof numArray);

 let myFunction = function(){
    console.log("Namaskaaram");
 }
 myFunction()
 console.log(typeof myFunction);
 
 myObject = {
    name : 'yash',
    rollNum: 204
 }
 
 console.log(typeof myObject)