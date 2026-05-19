// Interface
interface User {
    name : string;
    age : number;
    email? : string;  // optional Property
    readonly id :number; //readonly Property
}

//Object type annotation 
let user : User = 
{ 
  name :"Sunny",
  age : 27,
  id:1
}

//Interface with method
interface Product {
    name : String;
    price :number;
    getDiscount(percent:number):number;
}

let laptop  : Product ={
    name : "Sunny Shinde",
    price : 50000,
    getDiscount(percentage :number):number {
        return this.price * (percentage/100);
    },
}
