type status = "Pending" | "Approval" | "Rejected";
declare function setStatus(status: status): void;
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorfulCircle = Colorful & Circle;
declare let myCircle: ColorfulCircle;
//# sourceMappingURL=07-Union-itersection.d.ts.map