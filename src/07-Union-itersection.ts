//Union Types  (OR)
type status = "Pending" | "Approval" | "Rejected"

function setStatus(status : status) : void {
    console.log(`Status set to: ${status}`);
}

setStatus("Approval");

//Intersection Types (AND)

interface Colorful {
    color :string;
}

interface Circle {
    radius : number;
}


type ColorfulCircle = Colorful & Circle

let myCircle : ColorfulCircle ={
    color :"Red",
    radius : 10
}