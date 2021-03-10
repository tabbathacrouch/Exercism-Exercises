// exercism --> matrix
// Given a string representing a matrix of numbers, return the rows and columns of that matrix.
// So given a string with embedded newlines like:
// 9 8 7
// 5 3 2
// 6 6 7
// representing this matrix:
//     1  2  3
//   |---------
// 1 | 9  8  7
// 2 | 5  3  2
// 3 | 6  6  7
// your code should be able to spit out:
// * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
// * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
// The rows for our example matrix:
// 9, 8, 7
// 5, 3, 2
// 6, 6, 7
// And its columns:
// 9, 5, 6
// 8, 3, 6
// 7, 2, 7

export class Matrix {
  constructor(string) {
    this.Rows = string.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows() {
    return this.Rows;
  }

  get columns() {
    return this.Rows[0].map((col, i) => this.Rows.map((row) => row[i]));
  }
}

// -----1st attempt----- (extract columns)
// let columnArray = [];
// for (let i = 0; i < this.matrix.length; i++) {
//   for (let j = 0; j < this.matrix.length; j++) {
//     columnArray.push(this.matrix[i][j]);
//   }
// }
// return columnArray;

// (another way to extract the rows)
// return this.Rows.split("\n").map((x) => x.split(" ").map((i) => parseInt(i)));
