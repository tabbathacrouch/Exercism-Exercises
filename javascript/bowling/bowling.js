// exercism --> bowling
// Score a bowling game.
// Bowling is a game where players roll a heavy ball to knock down pins arranged in a triangle. Write code to keep track of the score of a game of bowling.
// Scoring Bowling
// The game consists of 10 frames. A frame is composed of one or two ball throws with 10 pins standing at frame initialization. There are three cases for the tabulation of a frame.
// An open frame is where a score of less than 10 is recorded for the frame. In this case the score for the frame is the number of pins knocked down.
// A spare is where all ten pins are knocked down by the second throw. The total value of a spare is 10 plus the number of pins knocked down in their next throw.
// A strike is where all ten pins are knocked down by the first throw. The total value of a strike is 10 plus the number of pins knocked down in the next two throws. If a strike is immediately followed by a second strike, then the value of the first strike cannot be determined until the ball is thrown one more time.
// Here is a three frame example:
// Frame 1	Frame 2	Frame 3
// X (strike)	5/ (spare)	9 0 (open frame)
// Frame 1 is (10 + 5 + 5) = 20
// Frame 2 is (5 + 5 + 9) = 19
// Frame 3 is (9 + 0) = 9
// This means the current running total is 48.
// The tenth frame in the game is a special case. If someone throws a strike or a spare then they get a fill ball. Fill balls exist to calculate the total of the 10th frame. Scoring a strike or spare on the fill ball does not give the player more fill balls. The total value of the 10th frame is the total number of pins knocked down.
// For a tenth frame of X1/ (strike and a spare), the total value is 20.
// For a tenth frame of XXX (three strikes), the total value is 30.
// Requirements
// Write code to keep track of the score of a game of bowling. It should support two operations:
// roll(pins : int) is called each time the player rolls a ball. The argument is the number of pins knocked down.
// score() : int is called only at the very end of the game. It returns the total score for that game.

export class Bowling {
  constructor() {
    this.frame = 0;
    this._score = [];
    this.first = null;
    this.gameFinished = false;
    this.fillBall = false;
  }

  static frameScore(r, ...prev) {
    switch (r) {
      case "X":
        return 10;
      case "/":
        return 10 - prev[0];
      default:
        return parseInt(r);
    }
  }

  roll(r) {
    if (r < 0) throw new Error("Negative roll is invalid");
    if (this.gameFinished) throw new Error("Cannot roll after game is over");
    if (r > 10 || r + parseInt(this.first) > 10) {
      throw new Error("Pin count exceeds pins on the lane");
    }
    if (r === 10 && this.first == null) {
      if (this.frame >= 9 && this.frame <= 11) {
        this._score.push(r);
      } else {
        this._score.push("X");
      }
      this.frame += 1;
      if (this.frame === 12 || this.fillBall) this.gameFinished = true;
    } else if (this.fillBall) {
      this.gameFinished = true;
      this._score.push(r);
    } else if (this.first !== null) {
      const second = r + this.first === 10 && this.frame < 10 ? "/" : r;
      this._score.push(this.first);
      this._score.push(second);
      this.first = null;
      this.frame += 1;
    } else {
      this.first = r;
    }
    if (this.frame === 10) {
      if (
        this._score[this._score.length - 1] !== 10 &&
        this._score[this._score.length - 1] !== "/"
      )
        this.gameFinished = true;
      if (this._score[this._score.length - 1] === "/") this.fillBall = true;
    } else if (this.frame === 11) {
      if (this._score[this._score.length - 1] !== 10) {
        this.gameFinished = true;
      } else {
        this.fillBall = true;
      }
    }
  }

  score() {
    if (!this.gameFinished)
      throw new Error("Score cannot be taken until the end of the game");
    this._score.forEach((frame, index) => {
      if (frame === "X") {
        const nextThrow = Bowling.frameScore(this._score[index + 1]);
        const nextNextThrow = Bowling.frameScore(
          this._score[index + 2],
          nextThrow
        );
        this._score[index] = 10 + nextThrow + nextNextThrow;
      } else if (frame === "/") {
        if (index + 2 === this._score.length) {
          this._score[index] = Bowling.frameScore(
            this._score[index],
            this._score[index - 1]
          );
        } else {
          this._score[index] =
            Bowling.frameScore(this._score[index], this._score[index - 1]) +
            Bowling.frameScore(this._score[index + 1]);
        }
      }
    });
    return this._score.reduce((acc, curr) => acc + curr);
  }
}
