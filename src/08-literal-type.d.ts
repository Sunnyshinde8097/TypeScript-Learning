declare let direction: "North" | "South" | "east" | "west";
declare let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
type SuccessResponse = {
    status: "Success";
    data: any;
};
type ErrorResponse = {
    status: "error";
    message: string;
};
type ApiResponse = SuccessResponse | ErrorResponse;
//# sourceMappingURL=08-literal-type.d.ts.map