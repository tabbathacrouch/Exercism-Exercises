// exercism --> scrabble score
// Letter Values
// You'll need these:
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Examples
// "cabbage" should be scored as worth 14 points:
// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:
// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14
// Extensions
// You can play a double or a triple letter.
// You can play a double or a triple word.

export const score = (scrabbleWord) => {
  const letterValues = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
  return scrabbleWord
    .toUpperCase()
    .split("")
    .reduce((score, letter) => (score += letterValues[letter]), 0);
};

// -----1st attempt-----
// export const score = (scrabbleWord) => {
//   const letterValues = {
//     1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
//     2: ["D", "G"],
//     3: ["B", "C", "M", "P"],
//     4: ["F", "H", "V", "W", "Y"],
//     5: ["K"],
//     8: ["J", "X"],
//     10: ["Q", "Z"],
//   };
//   scrabbleWord = scrabbleWord.toUpperCase();
//   let scrabbleScore = 0;
//   for (let i = 0; i < scrabbleWord.length; i++) {
//     if (letterValues[1].includes(scrabbleWord[i])) {
//       scrabbleScore += 1;
//     }
//     else if (letterValues[2].includes(scrabbleWord[i])) {
//       scrabbleScore += 2;
//     }
//     else if (letterValues[3].includes(scrabbleWord[i])) {
//       scrabbleScore += 3;
//     }
//     else if (letterValues[4].includes(scrabbleWord[i])) {
//       scrabbleScore += 4;
//     }
//     else if (letterValues[5].includes(scrabbleWord[i])) {
//       scrabbleScore += 5;
//     }
//     else if (letterValues[8].includes(scrabbleWord[i])) {
//       scrabbleScore += 8;
//     }
//     else if (letterValues[10].includes(scrabbleWord[i])) {
//       scrabbleScore += 10;
//     }
//   }
//   return scrabbleScore;
// };
