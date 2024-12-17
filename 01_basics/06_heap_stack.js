// the primitive DTs get memory in Stack
// The copy of the data is passed when called

// The non-primitive DTs get memory in Heap
// the reference is passed when called

let username = 'yash'
let anotherName = username

anotherName = 'ayush'
console.log(username);
console.log(anotherName);

userOne = {
    name : 'Rahul',
    email : 'rahul@google.com',
    rollNo : 42
}

userTwo = userOne
userTwo.name = 'Priya'

console.log(userOne.name);
