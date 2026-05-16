//Primitive 
let username  :string = "Sunny Shinde";
let age :number = 27;
let isAdmin : boolean = true;

//Array

let number : number[] = [1,2,3,4];
let names :string[] = ["Sunny","Avenger"];


//Tuple
let person : [string,number] = ["Piyush",27];

//enum
enum Color { Red,Green,Blue}
let favoriteColor : Color = Color.Blue;

//Any (Avoid When Possible)
let randomValue : any = 10;
randomValue ="Sunny";
randomValue = true;

//Unknowns (Safety than any)
let userInput :unknown ;
userInput = 5 ;
userInput = "text";

//Void (for functions that dont return)
function subscribe(message : string) :void {
    console.log(message);
}

//Null and Undefined
let nullValue :null =null;
let UndefinedValue :undefined = undefined;

//