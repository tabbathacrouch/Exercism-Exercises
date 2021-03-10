// exercism --> high scores
// Manage a game player's High Score list.
// Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. 
// Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.

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
