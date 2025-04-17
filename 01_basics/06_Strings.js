const name = "piyush"
const repoCount = 50

// console.log(name + repoCount + ' Value'); //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //we use backticks. This is "string interpolation".

// Different way to declare strings
const gameName = new String('Hitesh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //give the index and you will get the value of string present at that index.
console.log(gameName.indexOf('t')); //give a character of string it will give you the index.

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "     hitesh      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://piyush.com/piyush%20roy"
console.log(url.replace('%20','-'));

console.log(url.includes('piyush'));
console.log(url.includes('hitesh'));

const nameGame = "piyush-kumar-roy"
console.log(nameGame.split('-'));