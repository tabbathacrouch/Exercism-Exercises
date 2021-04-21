// exercism --> word-search
// In word search puzzles you get a square of letters and have to find specific words in them.
// For example:
// jefblpepre
// camdcimgtc
// oivokprjsm
// pbwasqroua
// rixilelhrs
// wolcqlirpc
// screeaumgr
// alxhpburyi
// jalaycalmp
// clojurermt
// There are several programming languages hidden in the above square.
// Words can be hidden in all kinds of directions: left-to-right, right-to-left, vertical and diagonal.
// Given a puzzle and a list of words return the location of the first and last letter of each word.

class WordSearch {
  constructor(grid) {
    this.grid = grid;
    this.columns = this.grid[0].length;
    this.rows = this.grid.length;
    this.directions = [
      [-1, 0],  // north
      [1, 0],   // south
      [0, -1],  // west
      [0, 1],   // east
      [-1, 1],  // noth-east
      [1, 1],   // south-east
      [1, -1],  // south-west
      [-1, -1]  // noth-west
    ];
  }

  find(words) {
    const result = {};
    for (let word of words) {
      result[word] = this.search(word);
    }
    return result;
  }

  search(word) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.columns; col++) {
        if (word[0] !== this.grid[row][col])
          continue;
        const end = this.searchEnd(row, col, 0, word);
        if (end)
          return {start: [row + 1, col + 1], end: [end.row + 1, end.col + 1]};
      }
    }
  }

  searchEnd(row, col, len, word) {
    for (let cardinal of this.directions) {
      const end = this.searchTowards(row + cardinal[0], col + cardinal[1], len + 1, word, cardinal);
      if (end)
        return end;
    }
  }

  searchTowards(row, col, len, word, cardinal) {
    if (row >= this.rows || row < 0 || col >= this.columns || col < 0)
      return;
    if (len >= word.length || word[len] !== this.grid[row][col])
      return;
    if (len + 1 === word.length)
      return {row, col};
    const end = this.searchTowards(row + cardinal[0], col + cardinal[1], len + 1, word, cardinal);
    if (end)
      return end;
  }
}

export default WordSearch;






// ***** 1st attempt *****
// class WordSearch {
//   constructor(grid) {
//     this.grid = grid;
//     this.verticalGrid = this.grid.map((col, i) =>
//       this.grid
//         .map((col) => col.split(""))
//         .map((row) => row[i])
//         .join("")
//     );
//   }

//   find([...words]) {
//     let found;
//     const searchWords = [...words];
//     let results = {};
//     for (let i = 0; i < searchWords.length; i++) {
//       for (let j = 0; j < this.grid.length; j++) {
//         // search left-to-right
//         if (this.grid[j].match(searchWords[i]) !== null) {
//           const startIndex = this.grid[j].match(searchWords[i]).index;
//           found = {
//             start: [j + 1, startIndex + 1],
//             end: [j + 1, startIndex + searchWords[i].length],
//           };
//         }
//         // search right-to-left
//         if (
//           this.grid[j].split("").reverse().join("").match(searchWords[i]) !==
//           null
//         ) {
//           const startIndex = this.grid[j].match(
//             searchWords[i].split("").reverse().join("")
//           ).index;

//           found = {
//             start: [j + 1, startIndex + searchWords[i].length],
//             end: [j + 1, startIndex + 1],
//           };
//         }
//         // search vertical (top-to-bottom)
//         if (this.verticalGrid[j].match(searchWords[i]) !== null) {
//           const startIndex = this.verticalGrid[j].match(searchWords[i]).index;
//           found = {
//             start: [startIndex + 1, j + 1],
//             end: [j + 1, startIndex + searchWords[i].length],
//           };
//         }
//         // search vertical (bottom-to-top)
//         if (
//           this.verticalGrid[j]
//             .split("")
//             .reverse()
//             .join("")
//             .match(searchWords[i]) !== null
//         ) {
//           const startIndex = this.verticalGrid[j].match(
//             searchWords[i].split("").reverse().join("")
//           ).index;
//           found = {
//             start: [startIndex + searchWords[i].length, j + 1],
//             end: [startIndex + 1, j + 1],
//           };
//         }
//         results[searchWords[i]] = found;
//       }
//     }
//     return results;
//   }
// }

// export default WordSearch;
