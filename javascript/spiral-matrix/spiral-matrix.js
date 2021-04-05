// exercism --> spiral matrix
// Given the size, return a square matrix of numbers in spiral order.
// The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order, like these examples:
// Spiral matrix of size 3
// 1 2 3
// 8 9 4
// 7 6 5
// Spiral matrix of size 4
//  1  2  3 4
// 12 13 14 5
// 11 16 15 6
// 10  9  8 7

export class SpiralMatrix {
  static ofSize(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(""));
    let counter = 1;
    let startColumn = 0;
    let startRow = 0;
    let endColumn = n - 1;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
      for (let i = startColumn; i <= endColumn; i++) {
        result[startRow][i] = counter;
        counter++;
      }
      startRow++;

      for (let j = startRow; j <= endRow; j++) {
        result[j][endColumn] = counter;
        counter++;
      }
      endColumn--;

      for (let k = endColumn; k >= startColumn; k--) {
        result[endRow][k] = counter;
        counter++;
      }
      endRow--;

      for (let l = endRow; l >= startRow; l--) {
        result[l][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }

    return result;
  }
}
