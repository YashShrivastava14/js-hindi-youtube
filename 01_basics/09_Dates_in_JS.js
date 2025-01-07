let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


// let specificDate = new Date(2002,3,14)
// let specificDate = new Date(2002,3,14,20,23,3)
// console.log(specificDate.toLocaleString());

let newDate = new Date("02-01-1970")         //for mm-dd-yyyy format
// console.log(newDate.toLocaleString());

//  ******  TimeStamps

let myTimestamp = Date.now()        // gives the miliseconds from 1jan 1970
console.log(myTimestamp.toLocaleString());
console.log(newDate.getTime());



