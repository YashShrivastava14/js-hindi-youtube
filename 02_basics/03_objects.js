// can be made by 2 ways : literal and constructor(singleton)
// Object.create  --> singleton

//object literals

const symb = Symbol("Rollnum")

let obj = {
    name : "Yash",
    age : 22,
    email : "yshri@google.com",
    isLoggedin : true,
    lastLoggedin : ["Monday", "Tuesday"],
    "Full name" : "YS",
    [symb] : "Rollnum"
}

// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj["Full name"])
//onsole.log( obj[symb]);
// console.log(obj)

//freezing the object 
obj.age=21
// console.log(obj)

// Object.freeze(obj)      //locked the object 

obj.age=23
// console.log(obj)

obj.myfunc = function(){
    console.log("Hello world");
}

obj.myfunc2 = function greet(){
    console.log(`this is function 2 , name is ${this.name}`);
}



console.log(obj.myfunc);
console.log(obj.myfunc2());
