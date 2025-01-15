
function greet(){
    console.log(`Hello , ${this.name}`);
    console.log(this);

    
}

obj1 = {
    name : "Yash",
    id : 204,
    hello : greet
}

obj2 = {
    name : "Parul",
    id : 207,
    namaste : greet
}

obj1.hello()
// obj2.namaste()
// greet.call(obj2)

// console.log(this);

function randomFunction (){
    // console.log(this);
    
}
randomFunction()


//++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++++
 console.log("++++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++++++");
 

const addTwo = (num1 , num2) => {
    console.log(this);
    return num1+num2
}
console.log(addTwo(34,6));

//      ~~~ Implicit return(without return keyword) ~~~
// const greeting = () => console.log("Implicit Arrow function");
// const greeting = (name) => `Hello ${name}`
// const greeting = (obj) =>  ({name:"yashika", id : 204}) 

// console.log(greeting())
