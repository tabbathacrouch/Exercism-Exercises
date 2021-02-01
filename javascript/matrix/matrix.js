// exercism --> matrix

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

// another way to extract the row
// return this.Rows
// .split("\n")
// .map((x) => x.split(" ").map((i) => parseInt(i)));

// 1st attempt to extract columns
// let columnArray = [];
// for (let i = 0; i < this.matrix.length; i++) {
//   for (let j = 0; j < this.matrix.length; j++) {
//     columnArray.push(this.matrix[i][j]);
//   }
// }
// return columnArray;
