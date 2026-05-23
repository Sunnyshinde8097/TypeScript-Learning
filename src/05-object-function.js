"use strict";
//Object type annotation 
let user = {
    name: "Sunny",
    age: 27,
    id: 1
};
let laptop = {
    name: "Sunny Shinde",
    price: 50000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
};
//# sourceMappingURL=05-object-function.js.map