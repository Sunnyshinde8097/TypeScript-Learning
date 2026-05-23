"use strict";
class Person {
    //Properties
    name;
    age;
    email;
    //Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    //Method
    introduce() {
        return ` hi, I'm ${this.name} and I'm ${this.age} year old`;
    }
    //Getter
    getName() {
        return this.name;
    }
    //Setter
    setName(name) {
        this.name = name;
    }
}
class Employee {
    id;
    name;
    department;
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetail() {
        return `${this.name} Work in ${this.department}`;
    }
}
let Sunny = new Employee(101, "Piyush", "Engineering");
console.log(Sunny.getDetail());
//# sourceMappingURL=10-Class.js.map