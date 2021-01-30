//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor([...scores]) {
    this.listofScores = [...scores];
  }

  get scores() {
    return this.listofScores;
  }

  get latest() {
    return this.listofScores.pop();
  }

  get personalBest() {
    return this.listofScores.sort((a, b) => a - b).pop();
  }

  get personalTopThree() {
    return this.listofScores
      .sort((a, b) => a - b)
      .slice(-3)
      .reverse();
  }
}
