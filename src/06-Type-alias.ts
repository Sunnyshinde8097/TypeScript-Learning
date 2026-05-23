//Type Alias

type Point = {
    x: number;
    y:number ;
}

let point : Point = { x:10,y:20}

// Type alias for Primitives
type ID = string | number;

let userId : ID ="Sunny Shinde";
let productId : ID = 456;

// Type Alias and Interface

//Interface can be Extended , Type of Alias cananot
interface Animal {
    name : string;
}

interface Dog1 extends Animal{
    Breed : string;
 
}

let myDog : Dog1 = {
    name : "Buddy",
    Breed : "Golden Retriever",
};

// Interface cane be declared muliple times and will merge
interface Animal1 {
    name : string;
}
interface Animal1 {
    age :number;
}

let dog : Animal1 ={
    name : "Kalu Bhai",
    age : 12
}

//Use interface for Object shapes,
// type aliase for Unions/interSections

interface User {
    name :string,
    age :number
}

type userId = string | number;


