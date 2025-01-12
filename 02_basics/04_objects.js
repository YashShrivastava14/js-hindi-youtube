const tinder = new Object()
console.log(tinder);

tinder.name = "Rohan"
tinder.number = 998877
tinder.email = "rohan@google.com"
tinder.isLoggedIn = true

const regularUser = {
     name : {
        firstName : "Abhishek",
        otherName : {
            middleName : "Raj",
            lastname : "Shrivastava"
        }
     },
     contact : 12345,
     city : "Orai"
}

console.log(regularUser.name.otherName.middleName);
// console.log(regularUser.name.otherName?.middleName);   <---- '?' prevent             
//                                                        error if the variable doesn't exist
console.log(regularUser["name"]["otherName"]["lastname"]);




// Objects Concanating
obj1 = {a: "apple", b:"banana"}
obj2 = {c: "dog", d:"dog"}

// const obj3 = {obj1,obj2}
// console.log(obj3);

const obj5 = Object.assign(obj1, obj2) 
//  obj1 is target & obj2 is source, (source obj)-->(target obj)
console.log(obj1 == obj5);

const obj6 = Object.assign({}, obj1, obj2) 
// now both the objets(obj1,obj2) are source and the empty{} is target
console.log(obj6);


obj4 = {...obj1, ...obj2}           //spread operator
console.log(obj4);



//More Object methods 
console.log(Object.keys(tinder));
console.log(Object.values(tinder).length);

console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('name'));
