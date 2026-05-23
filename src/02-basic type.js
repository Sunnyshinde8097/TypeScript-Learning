"use strict";
//Primitive 
let username = "Sunny Shinde";
let age = 27;
let isAdmin = true;
//Array
let number = [1, 2, 3, 4];
let names = ["Sunny", "Avenger"];
//Tuple
let person = ["Piyush", 27];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
//Any (Avoid When Possible)
let randomValue = 10;
randomValue = "Sunny";
randomValue = true;
//Unknowns (Safety than any)
let userInput;
userInput = 5;
userInput = "text";
//Void (for functions that dont return)
function subscribe(message) {
    console.log(message);
}
//Null and Undefined
let nullValue = null;
let UndefinedValue = undefined;
//
//# sourceMappingURL=02-basic%20type.js.map