
const addingTwoNumbers = function (num1, num2) {
  // definition has parameters
  console.log(`num1 is ${num1} and num2 is ${num2}`);

  if (!num1 && !num2) {
    console.log("Please enter the numbers.");
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    console.log("The sum of given inputs is not possible.");
  }
};

console.log(addingTwoNumbers(2, "5")); // calling has arguments


// DEFAULT ARGUMENT
const defaultArgu = function (num = 1){
    return `the default value in the argument is ${num}`;
}

console.log(defaultArgu());


// REST AND SPREAD OPERATORS
// both are same(...var) , depends upon the use case when it'd be called spread and when rest

// const myfunc = function(...num){        //rest operator
//      console.log(num);     
// }
const myfunc = function(var1,var2,...num){        //rest operator
    console.log(num);     
}

myfunc(1444,234,455,67)


const myObject = {
    name : "yash",
    id : 204
}


// PASSING OBJECT AS ARGUMENT

// const objTakingFunction = function(obj){       
//     console.log(`obj.name is ${obj.name} and obj.id is ${obj.id}`);     
// }

// objTakingFunction(myObject)

const objTakingFunction = function(obj){       
    console.log(`obj.name is ${obj.name} and obj.id is ${obj.id}`);     
}
objTakingFunction({
    name : "sam",
    id : 123
})



// PASSING ARRAY AS ARGUMENT
const myArray =[12,24,588,90]

const returnSecondElement = function (arguarray){
    console.log(arguarray[1]);   
}

returnSecondElement(myArray)
returnSecondElement([10,20,30,40])
