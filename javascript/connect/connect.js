// exercism --> connect
// Compute the result for a game of Hex / Polygon.
// The abstract boardgame known as Hex / Polygon / CON-TAC-TIX is quite simple in rules, though complex in practice. Two players place stones on a parallelogram with hexagonal fields.
// The player to connect his/her stones to the opposite side first wins. The four sides of the parallelogram are divided between the two players (i.e. one player gets assigned a side and the side directly opposite it and the other player gets assigned the two other sides).
// Your goal is to build a program that given a simple representation of a board computes the winner (or lack thereof). Note that all games need not be "fair". (For example, players may have mismatched piece counts or the game's board might have a different width and height.)
// The boards look like this:
// . O . X .
//  . X X O .
//   O O O X .
//    . X O X O
//     X O O O X
// "Player O" plays from top to bottom, "Player X" plays from left to right. In the above example O has made a connection from left to right but nobody has won since O didn't connect top and bottom.

const steps = [
  [0, 2], // Left to right
  [0, -2], // Right to left
  [1, 0], // Top to bottom
  [-1, 0], // Bottom to top
  [1, 0], // Top left to bottom right
  [1, -2], // Top right to bottom left
  [-1, 2], // Bottom left to top right
  [-1, 0], // Bottom right to top left
];

export class Board {
  constructor(board) {
    this.board = board.map((x) => x.trim().split(""));
  }

  winner() {
    let wins = [];
    for (let i = 0; i < this.board.length; i++) {
      let winValue = [];
      const row = this.board[i];
      const idxX = row.lastIndexOf("X");
      const idxO = row.lastIndexOf("O");
      if (idxX !== -1) {
        winValue.push([i, idxX]);
        wins = this.findStep([i, idxX], "X", winValue);
        if (wins != undefined) {
          if (this.checkWinner(wins, "X")) {
            return this.checkWinner(wins, "X");
          }
        }
      }
      winValue = [];
      if (idxO !== -1) {
        winValue.push([i, idxO]);
        wins = this.findStep([i, idxO], "O", winValue);
        if (wins != undefined) {
          if (this.checkWinner(wins, "O")) {
            return this.checkWinner(wins, "O");
          }
        }
      }
    }
    return "";
  }

  findStep(start, win, winValue) {
    let row = start[0];
    let column = start[1];
    let rowLength = this.board.length;
    let columnLength = this.board[0].length;
    let _board = this.board;
    let rowStep = 0;
    let columnStep = 0;
    if (column >= columnLength || row >= rowLength) {
      return;
    }
    for (let step of steps) {
      rowStep = row;
      columnStep = column;
      rowStep += step[0];
      columnStep += step[1];
      if (
        rowStep > rowLength - 1 ||
        columnLength - 1 < columnStep ||
        rowStep < 0 ||
        columnStep < 0
      )
        continue;
      if (_board[rowStep][columnStep] === win) {
        if (!this.isArrayInArray(winValue, [rowStep, columnStep])) {
          winValue.push([rowStep, columnStep]);
          this.findStep([rowStep, columnStep], win, winValue);
        }
      }
    }
    return winValue;
  }

  isArrayInArray(arr, item) {
    const item_as_string = JSON.stringify(item);
    const contains = arr.some(function (ele) {
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }

  checkWinner(wins, win) {
    const rowLength = this.board.length;
    const columnLength = this.board[rowLength - 1].length;
    let startPoint = wins[0][0];
    let endPoint = wins[wins.length - 1][0];
    if (startPoint === 0 && endPoint === rowLength - 1) {
      return win;
    }
    startPoint = wins[0][1];
    endPoint = wins[wins.length - 1][1];
    if (startPoint === 0 && endPoint === columnLength - 1) {
      return win;
    }
    if (startPoint === columnLength - 1 && endPoint === 0) {
      return win;
    }
    return false;
  }
}
