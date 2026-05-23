declare class Person {
    private name;
    protected age: number;
    email: string;
    constructor(name: string, age: number, email: string);
    introduce(): string;
    getName(): string;
    setName(name: string): void;
}
declare class Employee {
    private id;
    protected name: string;
    department: string;
    constructor(id: number, name: string, department: string);
    getDetail(): string;
}
declare let Sunny: Employee;
//# sourceMappingURL=10-Class.d.ts.map