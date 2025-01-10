// spread , concat, push

let names = ["yash","smriti","neha"]
let surnames = ["shrivastava","tiwari","batham"]

// names.push(surnames)    // push the 2nd array as the last element in 1st 
// console.log(names);     //changes 1st array

fullnames = names.concat(surnames)  // concatenate both arrows
console.log(names);     // doesn't affect original arr

let newArray = [...names,...surnames ]
console.log("new array is ", newArray);

//flat method
let numarray = [1,2,3,[4,5],6,[7,8,[9,10]]]
// console.log(numarray[5][2]);
let flattedArray = numarray.flat(1)
console.log(flattedArray);

// Some methpds used in data scrapping
//  Array.isArray  Array.for  Array.of

const myname = "yash"
console.log(Array.isArray(myname))
console.log(Array.from("yash"))   // return [] if can't make
console.log(Array.of(names,surnames))
console.log(Array.of(names,surnames).flat())  //interesting no?



