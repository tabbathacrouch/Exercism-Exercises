// exercism --> phone-number.js

export const clean = (string) => {
  let alphaRegex = /[a-z]/;
  let punctuationRegex = /[@:!]/;
  if (alphaRegex.test(string)){
    throw new Error('Letters not permitted');
  }
  if (punctuationRegex.test(string)){
    throw new Error('Punctuations not permitted');
  }
  let number = string.replace(/[-_().+\s]|/g, "");
  if (number.length <= 9) {
    throw new Error("Incorrect number of digits");
  } else if (number.length > 11) {
    throw new Error("More than 11 digits");
  } else if (number.length === 11) {
    if (number[0] !== "1") {
      throw new Error("11 digits must start with 1");
    }
    number = number.slice(1);
  }
  if (number[0] === "0"){
    throw new Error('Area code cannot start with zero');
  }
  if (number[0] === "1"){
    throw new Error('Area code cannot start with one');
  }
  if (number[3] === "0"){
    throw new Error('Exchange code cannot start with zero');
  }
  if (number[3] === "1"){
    throw new Error('Exchange code cannot start with one');
  }
  return number;
};
