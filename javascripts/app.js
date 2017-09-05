// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  coordinates: [0,0],
  travelLog: []
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "N"
    break;
  }
  console.log("You are facing: " + rover.direction)
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "N"
    break;
  }
  console.log("You are facing: " + rover.direction)
}

function moveForward(rover){
  console.log("moveForward was called")

  if (rover.direction === "N"){
    rover.coordinates[1] = rover.coordinates[1] - 1;
    rover.coordinates[0] = rover.coordinates[0]
  }

  if (rover.direction === "S") {
    rover.coordinates[1] = rover.coordinates[1] + 1;
    rover.coordinates[0] = rover.coordinates[0];
  }

  if (rover.direction === "E") {
    rover.coordinates[0] = rover.coordinates[0] + 1;
    rover.coordinates[1] = rover.coordinates[1]
  }

  if (rover.direction === "W") {
    rover.coordinates[0] = rover.coordinates[0] - 1;
    rover.coordinates[1] = rover.coordinates[1];
  }
  console.log("You are facing: " + rover.direction)
  console.log("You are at coordinates: " + "X:" + rover.coordinates[0] + " and " + "Y:" + rover.coordinates[1])
  }

function commands(lists) {
  str = lists
  str = str.toString();
  
  console.log(str);

  for (var i = 0; i < str.length; i++) {


    switch(str){
      case "f":
      moveForward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover)
      break;
    }
  }
}
