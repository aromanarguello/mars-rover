// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}



//counter clockwise turning
console.log(rover) // this log is just to keep trakc of the object

switch(rover.direction){
  case "N":
  turnLeft();
  rover.direction = "W";


console.log(rover)

  case "W":
  turnLeft(rover);
  rover.direction = "S";



console.log(rover)

  case "S":
  turnLeft(rover);
  rover.direction = "E"


console.log(rover)

  case "E":
  turnLeft(rover);
  rover.direction = "N"


  console.log(rover)
}




//
// if it changes direction then we can do an if condition for maybe another swithc statement
//
//
//
// if (rover.direction === "W" && moveForward(rover)){
//   rover.x = rover.x - 1 ;
// }
//
// moveForward(rover);
// console.log(rover.x);
