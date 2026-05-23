interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
}
declare let user: User;
interface Product {
    name: String;
    price: number;
    getDiscount(percent: number): number;
}
declare let laptop: Product;
//# sourceMappingURL=05-object-function.d.ts.map