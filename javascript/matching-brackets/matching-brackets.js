// exercism --> matching-brackets
// Given a string containing brackets [], braces {}, parentheses (), or any combination thereof, verify that any and all pairs are matched and nested correctly.

export const isPaired = (str) => {
  const pairedSymbols = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const brackets = [...str].filter((x) => [..."({[]})"].includes(x));
  const stack = [];
  for (let symbol of brackets) {
    if ("([{".includes(symbol)) {
      stack.push(symbol);
    }
    if (")]}".includes(symbol)) {
      if (!(pairedSymbols[stack.pop()] === symbol)) {
        return false;
      }
    }
  }
  return stack.length > 0 ? false : true;
};

// -----1st attempt-----
// export const isPaired = (input) => {
//   const brackets = [];
//   const pairedSymbols = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };
//   const closedSymbols = {
//     "}": true,
//     "]": true,
//     ")": true,
//   };
//   for (let i = 0; i < input.length; i++) {
//     let character = input[i];
//     if (pairedSymbols[character]) {
//       brackets.push(character);
//     } else if (closedSymbols[character]) {
//       if (pairedSymbols[brackets.pop()] !== character) {
//         return false;
//       }
//     }
//   }
//   return brackets.length === 0;
// };
