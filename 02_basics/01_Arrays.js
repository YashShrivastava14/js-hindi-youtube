let arr = [1,2,3,4,5]
let myArr = arr
console.log(arr);

myArr[2] = "yash"           // call by reference 

console.log(arr);
/*
Arrays in JS are resizable
variying datatypes
make shallow copy (call by reference)

*/ 

let newArr = new Array(11,12,13,14,15,16)
// console.log(newArr);

//  ------------ Array Methods ---------------
 newArr.push(17, 18, "nineteen")
//  console.log(newArr);
 
 newArr.pop()
//  console.log(newArr);

newArr.unshift(10)      //push at head
// console.log(newArr);

 newArr.shift()         //pop from head
//  console.log(newArr);

 const slicedArr = newArr.slice(1,3)        //doesn't include range
 console.log(slicedArr);
 console.log("A ",newArr);  // make the copy of a section of the original array
 

 const splicedArr = newArr.splice(1,3)  //included range
 console.log(splicedArr);
 console.log("B " ,newArr);   // cut the section from the original array
 
 