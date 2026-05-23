// String literal Types
let direction : "North" | "South" | "east"| "west";
direction = "North";

//Numeric literal types
let diceRoll : 1 | 2 | 3 | 4| 5 |6 ;
diceRoll = 2;

//Combining with other type
type SuccessResponse = {
    status : "Success";
    data :any ;
};

type ErrorResponse = {
    status :"error";
    message : string ;
};

type ApiResponse = SuccessResponse | ErrorResponse;



