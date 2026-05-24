interface Todo {
    title :string;
    description :string;
    completed : boolean;
    createdAt :Date;
    assignedTO :string;
}


//Partical - makes All properties optional
type ParticalTodo = Partial<Todo>;
let updateTodo :ParticalTodo ={
    completed :true ,
};

//Required - make all Properties readonly
type RequiredTodo = Required<Todo>;

//Readonly - makes all Properties readonly
type ReadonlyTodo = Readonly<Todo>;
let myTodo :Todo ={
    title :"Learn Typescript",
    description :"Complete Tutoriak",
    completed :false,
    createdAt :new Date(),
    assignedTO : "Piyush",
};
myTodo.completed= true;

//Pick - pick specific Properties
type TodoPreview = Pick<Todo,"title">;

//omit - omit Specific properties
type TodoWithoutDate = Omit<Todo,"createdAt">

//Record - Construct Object type with Specific keys and value type

type PageInfo = {
    title : string;
    url : string;
};

type Pages = "home" | "About" | "Contact";

type Merged = Record<Pages,PageInfo>;

let pages : Merged = {
    home :{title :"Home",url :"/"},
    About : {title:"About",url:"/"},
    Contact : {title:"Contact",url:"/"}
}

//Reture Type - get return type of function

function creatUser (){
    return {
        id :1,
        name : "Sunny",
        email :"sunnyshinde8097@gmail.com"
    }
}
type UserType = ReturnType<typeof creatUser>;