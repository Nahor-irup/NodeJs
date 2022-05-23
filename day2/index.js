// console.log('HELLO')

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3))

// global.myName = "ROHAN"

// function print() {
//     console.log(myName)
// }
// print();

// setInterval(() => console.log("Printed after 2sec"), 2000)


// const { add, sub } = require("./app");

import { add } from "./app.js";
import { sub } from "./app.js"

console.log(add(2, 1));
console.log(sub(2, 1));

console.log('HELLO')

function add(a, b) {
    return a + b;
}

console.log(add(2, 3))

myName = "ROHAN"

function print() {
    console.log(myName)
}
print();

setInterval(() => console.log("Printed after 2sec"), 2000)

console.log(__filename)
console.log(__dirname)

// require("") 