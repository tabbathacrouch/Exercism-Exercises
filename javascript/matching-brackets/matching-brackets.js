// exercism --> matching-brackets

export const isPaired = (input) => {
  const brackets = [];
  const pairedSymbols = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const closedSymbols = {
    "}": true,
    "]": true,
    ")": true,
  };
  for (let i = 0; i < input.length; i++) {
    let character = input[i];
    if (pairedSymbols[character]) {
      brackets.push(character);
    } else if (closedSymbols[character]) {
      if (pairedSymbols[brackets.pop()] !== character) {
        return false;
      }
    }
  }
  return brackets.length === 0;
};
