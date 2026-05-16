//basic function with Types
function add(a:number,b:number):number{
    return a + b;
}

//Optional parameter
function greet(name:string ,greeting?:string):string{
    if(greeting){
        return `${greeting},${name}`
    }
    return `Hello ,${name}`;
}

// Reset Parameter
function multiple(a:number,b:number=1):number{
    return a*b;
}

//Rest Parameter
function sum(...numbers:number[]):number{
    return numbers.reduce((total,n)=>total+n,0);
}

//Arrow functions
const divide = (a:number,b:number):number => a/b;

// Function Types
let calculate : (x:number,y:number) => number;
calculate = add;