//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string;
  }

  get rows() {
    return this.matrix
      .split("\n")
      .map((x) => x.split(" ").map((j) => parseInt(j)));
  }

  get columns() {
    
    
    return this.matrix
      .split("\n")
      .map((x) => x.split(" ").map((j) => parseInt(j)));
  }
}
