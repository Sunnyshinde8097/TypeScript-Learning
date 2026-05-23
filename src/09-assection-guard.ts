// Type Assertion
let somelength : unknown = "Subscribe to RoadsideCoder";
let strLength : number = (somelength as string).length; 
//Or
let strLength2 : number = (<string>somelength ).length;

//Type Guard|

function Processvalue(value: string | number) {
    if(typeof value == "string"){
      console.log(value.toUpperCase());
    }
    else
    {
       console.log(value.toFixed(2))
    }
}

//instanceof type guard
class Dog {
    bark(){
        console.log("Woof!");
    }
}

class Cat {
    meow(){
        console.log("Meow!");
    }
}

function makeSound(animal:Dog|Cat){
    if(animal instanceof Dog){
        animal.bark();
    }else{
      animal.meow();
    }
}