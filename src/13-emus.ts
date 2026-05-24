enum Direction {
    up = 1,
    Down,
    left,
    right
}
type Direacton = any;

let Dir : Direacton = Direction.right;

//String Enum
enum Status  {
    pending = "Pending",
    Approved = "Approved",
    Rejected = "Rejected"
}

let Stat : Status = Status.Approved;

//Const enum(more Performance)
const enum HttpStatus {
    Ok =200,
    BadRequest = 400,
    unauthorized =401,
    NotFound =404
}

function handleResponse(Status:HttpStatus) :void {
    if(Status=== HttpStatus.Ok){
       console.log("Success!");
    }else if(Status == HttpStatus.BadRequest){
        console.log("Something is Wrong!")
    }else if(Status==HttpStatus.unauthorized){
        console.log("UnAuthorize Access");
    }else if(Status == HttpStatus.NotFound)
    {
        console.log("Try Again Later!")
    }
}