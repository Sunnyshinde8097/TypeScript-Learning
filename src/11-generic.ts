//Generics in Typescript

function identity<MyType>(arg:MyType):MyType{
    return arg;
}
let output1 = identity<string>("Subscribe");
let output2 = identity<number>(100);


//Generic with arrays
function getFirstElement<T>(arr:T[]):T | undefined{
    return arr[0];
}

let myNum1 = getFirstElement([1,2,3]);
let myNum2 = getFirstElement(["piyush","RoadsideCoder"]);


//Generic Interface
interface KeyvaluePair<K,V>{
    key :{
        name :string;
        mykey:K;
    } ;
    value :V;
}

let stringNumberPair : KeyvaluePair <string,number> = {
    key :{
        name:"Sunny",
        mykey :"",
    },
    value :27
}



