class Person {
    //Properties
    private name :string;
    protected age : number;
    public email : string;

    //Constructor
    constructor(name :string,age :number,email :string){
        this.name = name;
        this.age = age;
        this.email =email;
     }

     //Method
     public introduce() :string {
        return ` hi, I'm ${this.name} and I'm ${this.age} year old`
     }
   //Getter
     public getName() :string {
        return this.name;
    
     }
    //Setter
     public setName(name: string){
        this.name = name;
     }
   
}

class Employee {
    constructor(   private id :number,
        protected name : string,
        public department : string,)
        {}
        getDetail():string{
            return `${this.name} Work in ${this.department}`
        }
}

let Sunny = new Employee(101,"Piyush","Engineering");
console.log(Sunny.getDetail());

class manager extends Employee 
{
    constructor(id:number,name:string,department:string,private teamSize:number){
        super(id,name,department);
    }

    getTeamInfo() : string{
        return `${this.name} manages ${this.teamSize} People`;
    }
}



