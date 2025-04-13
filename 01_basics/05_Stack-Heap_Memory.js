// Stack(Primitive), Heap(Non-Primitive)

// Stack
let myYoutubeName = "hiteshchaudharydotcom"
let anotherName = myYoutubeName
anotherName = "ChaiAurCode"

console.log(myYoutubeName);
console.log(anotherName);

// Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ibl"
}

let userTwo = userOne;
userTwo.email = "piyush@google.com";

console.log(userOne.email);
console.log(userTwo.email);