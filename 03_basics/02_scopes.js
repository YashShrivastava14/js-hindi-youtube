let a = 999
const b = 999
var c = 999

{ 
let a = 10;
const b = 4;
var c = 5
}

// console.log(a);
// console.log(b);
// console.log(c);

// NESTED FUNCTIONS
function outer(){ 

    let baharWala = "I am Outer variable"

    function inner(){
        let andarWala = "I am Inner variable"
        console.log(baharWala);
    }
    
    inner()
    // console.log(andarWala)
}

outer()

// +++++++++++++++++++++++ HOISTING ++++++++++++++++++++++++++++++

console.log(addOne(10));

function addOne (num){         //hoisting hogyii
    return "yash"+ num;
}
console.log(addOne(14))



// console.log(addTwo(5));
const addTwo = function (num){
    return num +2 ;
}


const addThree = function (num){
    // console.log(`sum is ${num}`);
    return num + Infinity
}

addThree(1000)
// console.log(addThree(1));

// adder(99)