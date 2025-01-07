let score = null; //string
let newScore = Number(score);
// newScore = Boolean(score)
// newScore = NaN
// newScore = undefined

// console.log(newScore);

let age = 10;
let newAge = String(age);
newAge = Boolean(age);
newAge = NaN;

let some = NaN;
let newsome = String(some);
// console.log(newsome);
// console.log(typeof newsome);

let bullu = true;
let newbullu = Number(bullu);
// console.log(newbullu);


let pra = undefined
let newpra = Boolean(pra)
console.log(pra);
console.log(typeof pra + " ----> " + typeof newpra);
console.log(newpra);

/*

"123" ---number--->  123
"yash123" ---number--->  NaN
"yash" ---number---> NaN
undefined ---number---> NaN
null ---number---> 0  
NaN ---number--->  NaN
string ---boolean--->  true
empty string "" ---boolean--->  false
0 ---boolean--->  False
25 ---boolean--->  true


*/
