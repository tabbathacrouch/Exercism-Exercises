// exercism --> pascals-triangle

export const rows = (n) => {
  const pascalsTriangle = [[1], [1, 1]];
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [[1]];
  } else if (n === 2) {
    return pascalsTriangle;
  } else {
    for (let x = 2; x < n; x++) {
      let previousRow = pascalsTriangle[pascalsTriangle.length - 1];
      let newRow = [1];
      for (let i = 0; i < previousRow.length - 1; i++) {
        let current = previousRow[i];
        let next = previousRow[i + 1];
        newRow.push(current + next);
      }
      newRow.push(1);
      pascalsTriangle.push(newRow);
    }
    return pascalsTriangle;
  }
};
