// Primitive - 7types
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Javascript is dynamically typed language because we don't have to determined data type

// const score:number = 100 //typescript

const score = 100 //Number
const scoreValue = 100.3 //Number

const isLoggedIn = true //Boolean
const outsideTemp = null //Null
let userEmail; //Undefined

//Symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 177459146591649164983641984693749374n //bigInt

// Non-Primitive(Reference)
// Array, Object, Functions

const heroes = ["shaktiman", "naagraj", "doga"] //arrays

//Objects
let myObj = {
    name : "Piyush",
    age : 21
}

//Functions
const myFunction = function(){
    console.log("Hello World");
}