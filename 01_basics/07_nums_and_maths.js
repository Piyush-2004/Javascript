// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966
// const otherNumber1 = 123.8966
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber1.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++//

console.log(Math);

console.log(Math.abs(-4)); //absolute  value
console.log(Math.round(4.3)); //Round off
console.log(Math.round(4.6)); //Round off
console.log(Math.ceil(4.2)); //Round off but always take next number for rounding off
console.log(Math.floor(4.2)); //Round off but always take next base value for rounding off
console.log(Math.min(4,9,23,6)); //find min number in array
console.log(Math.max(4,9,23,6)); //find max number in array

//Random function of math
console.log(Math.random()); //Its value always be in between 1 and 0
console.log((Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random(max-min+1))+ min)