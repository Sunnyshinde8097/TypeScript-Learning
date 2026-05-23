"use strict";
//basic function with Types
function add(a, b) {
    return a + b;
}
//Optional parameter
function greet(name, greeting) {
    if (greeting) {
        return `${greeting},${name}`;
    }
    return `Hello ,${name}`;
}
// Reset Parameter
function multiple(a, b = 1) {
    return a * b;
}
//Rest Parameter
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
//Arrow functions
const divide = (a, b) => a / b;
// Function Types
let calculate;
calculate = add;
//# sourceMappingURL=04-function.js.map