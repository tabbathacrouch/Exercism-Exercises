// exercism --> robot simulator
// Write a robot simulator.
// A robot factory's test facility needs a program to verify robot movements.
// The robots have three possible movements:
// turn right
// turn left
// advance
// Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of {x,y} coordinates, e.g., {3,8}, with coordinates increasing to the north and east.
// The robot then receives a number of instructions, at which point the testing facility verifies the robot's new position, and in which direction it is pointing.
// The letter-string "RAALAL" means:
// Turn right
// Advance twice
// Turn left
// Advance once
// Turn left yet again
// Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 4} facing west.

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || "Invalid Input";
  }
}

const bearings = ["north", "east", "south", "west"];

export class Robot {
  constructor() {
    this.robot = {
      direction: "north",
      x: 0,
      y: 0,
    };
  }
  get bearing() {
    return this.robot.direction;
  }

  get coordinates() {
    return [this.robot.x, this.robot.y];
  }

  place({ x, y, direction }) {
    this.robot.x = x;
    this.robot.y = y;
    if (!bearings.includes(direction)) {
      throw new InvalidInputError();
    } else {
      this.robot.direction = direction;
    }
  }

  evaluate(instructions) {
    const instructionsArray = instructions.split("");
    instructionsArray.forEach((element) => {
      if (element === "R") {
        this.robot.direction =
          bearings[(bearings.indexOf(this.robot.direction) + 1) % 4];
      }
      else if (element === "L") {
        this.robot.direction =
          bearings[(bearings.indexOf(this.robot.direction) + 3) % 4];
      }
      else if (element === "A") {
        if (this.robot.direction === "north") {
          this.robot.y += 1;
        }
        else if (this.robot.direction === "south") {
          this.robot.y -= 1;
        }
        else if (this.robot.direction === "east") {
          this.robot.x += 1;
        }
        else if (this.robot.direction === "west") {
          this.robot.x -= 1;
        }
      }
    });
  }
}
