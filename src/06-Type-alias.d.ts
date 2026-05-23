type Point = {
    x: number;
    y: number;
};
declare let point: Point;
type ID = string | number;
declare let userId: ID;
declare let productId: ID;
interface Animal {
    name: string;
}
interface Dog1 extends Animal {
    Breed: string;
}
declare let myDog: Dog1;
interface Animal1 {
    name: string;
}
interface Animal1 {
    age: number;
}
declare let dog: Animal1;
interface User {
    name: string;
    age: number;
}
type userId = string | number;
//# sourceMappingURL=06-Type-alias.d.ts.map