let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


// let specificDate = new Date(2002,3,14)
// let specificDate = new Date(2002,3,14,20,23,3)
// console.log(specificDate.toLocaleString());

let newDate = new Date("04-14-2002")         //for mm-dd-yyyy format
// console.log(newDate.toLocaleString());

//  ******  TimeStamps

let myTimestamp = Date.now()        // gives the miliseconds from 1jan 1970
console.log(myTimestamp.toLocaleString('en-IN'));

console.log(newDate.getDay() + 1 );
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getFullYear());

let dobDay = newDate.toLocaleString('default',{
    weekday : "long"
})


console.log(`Hello my name is yash. My DOB is ${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()} and the day was ${dobDay}.`)


let formattedDate = myDate.toLocaleString('default',{
    weekday : "short",
    era : "long",
    hour : "numeric",
    minute : "2-digit",
    timeZoneName : "long",
    year : "numeric",
    day: "numeric",
    month : "long"
})

console.log(myDate);
console.log(formattedDate);

