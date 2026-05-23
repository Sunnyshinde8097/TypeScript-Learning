"use strict";
// Type Assertion
let somelength = "Subscribe to RoadsideCoder";
let strLength = somelength.length;
//Or
let strLength2 = somelength.length;
//Type Guard|
function Processvalue(value) {
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
//instanceof type guard
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
//# sourceMappingURL=09-assection-guard.js.map