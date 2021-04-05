// exercism --> saddle points
// Detect saddle points in a matrix.
// So say you have a matrix like so:
//     1  2  3
//   |---------
// 1 | 9  8  7
// 2 | 5  3  2     <--- saddle point at column 1, row 2, with value 5
// 3 | 6  6  7
// It has a saddle point at column 1, row 2.
// It's called a "saddle point" because it is greater than or equal to every element in its row and less than or equal to every element in its column.
// A matrix may have zero or more saddle points.
// Your code should be able to provide the (possibly empty) list of all the saddle points for any given matrix.
// The matrix can have a different number of rows and columns (Non square).
// Note that you may find other definitions of matrix saddle points online, but the tests for this exercise follow the above unambiguous definition.

export const saddlePoints = (matrix) => {
  const SADDLE_POINTS = [];
  matrix.forEach((row, rowIndex) =>
    row.forEach((value, columnIndex) => {
      if (
        row.every((element) => value >= element) &&
        matrix.every((element) => value <= element[columnIndex])
      ) {
        SADDLE_POINTS.push({ row: rowIndex + 1, column: columnIndex + 1 });
      }
    })
  );
  return SADDLE_POINTS;
};
