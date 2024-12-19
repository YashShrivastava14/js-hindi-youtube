const tenthMarks = 91.6
// console.log("My 10th percentage is " + tenthMarks);

// String Interpolation :-
// console.log(`My 10th percentage is ${tenthMarks}`)


//Creation of Strings 
let str1 = "yashScindia"
let str2 = new String("  Shri   vastava")

console.log(`str1(${str1}) is string with datatype ${typeof str1}`);
console.log(`str2(${str2}) is string with datatype ${typeof str2}`);

console.log(str2[0]);
console.log(str2.length);
console.log(str2.indexOf('a'));
console.log(str2.length);
console.log(str2.toLowerCase());
console.log(str2.search('rivas'));      //search a substring,return index 
console.log(str2.slice(2,11));          //breaks a array 
console.log(str2.replace('S','P'));         // replace 1st occurance
console.log(str2.replaceAll('a','u'));      //replace all occurances
console.log(str2.trim());       //remove whitespaces from end
console.log(str2.substring(2,11));     // gives a substring
console.log(str1.substring(-1));

let ys = [12,13]
// console.log(ys.valueOf());
// console.log(str2.valueOf());            //give the primitive value of the object

let regex = /[a-z]/g        //defining regular expression to match
// console.log(str2.match(regex));

let firstName = 'Kanha'
let lastName = 'Tiwari'
console.log(lastName.concat(firstName));  //concatination





