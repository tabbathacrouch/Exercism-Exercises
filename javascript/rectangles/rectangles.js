// exercism --> rectangles
// Count the rectangles in an ASCII diagram like the one below.
//    +--+
//   ++  |
// +-++--+
// |  |  |
// +--+--+
// The above diagram contains 6 rectangles:
// +-----+
// |     |
// +-----+
//    +--+
//    |  |
//    |  |
//    |  |
//    +--+
//    +--+
//    |  |
//    +--+
//    +--+
//    |  |
//    +--+
// +--+
// |  |
// +--+
//   ++
//   ++
// You may assume that the input is always a proper rectangle (i.e. the length of every line equals the length of the first line).

export class Rectangles {
  static count(diagram) {
    let count = 0;

    if (diagram.length < 2 || diagram[0].length < 2) {
      return count;
    }

    const rows = diagram.length;
    const columns = diagram[0].length;
    const vertex = "+";
    const line = "|";
    const valid = [vertex, line];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (diagram[i][j] === vertex) {
          let topLeft = j;
          let verticesOnRow = this.findRowVertices(diagram, i, j);
          for (let k = 0; k < verticesOnRow.length; k++) {
            let topRight = verticesOnRow[k];
            for (let row = i + 1; row < rows; row++) {
              if (
                diagram[row][topLeft] === vertex &&
                diagram[row][topRight] === vertex
              ) {
                if (
                  valid.indexOf(diagram[row - 1][topLeft]) !== -1 &&
                  valid.indexOf(diagram[row - 1][topRight]) !== -1
                ) {
                  count++;
                }
              }
            }
          }
        }
      }
    }
    return count;
  }
  static findRowVertices(diagram, i, j) {
    const corners = [];
    for (j = j + 1; j < diagram[i].length; j++) {
      if (diagram[i][j] === '+') {
        corners.push(j);
      }
    }
    return corners;
  }
}
