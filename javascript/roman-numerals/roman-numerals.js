//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (n) => {
  let romanNumeral = "";
  while (n > 0) {
    if (listOfRomanNumerals.hasOwnProperty(n)) {
      romanNumeral = romanNumeral + listOfRomanNumerals[n];
      n -= n;
    }
    else if (n % 1000 === 0) {
      romanNumeral += "M";
      n -= 1000;
    } else if (n % 500 === 0) {
      romanNumeral += "D";
      n -= 500;
    } else if (n % 100 === 0) {
      romanNumeral += "C";
      n -= 100;
    } else if (n % 50 === 0) {
      romanNumeral += "L";
      n -= 50;
    } else if (n % 10 === 0) {
      romanNumeral += "X";
      n -= 10;
    } else if (n % 5 === 0) {
      romanNumeral += "V";
      n -= 5;
    } else {
      romanNumeral += "I";
      n -= 1;
    }
  }
  return romanNumeral;
};

export const listOfRomanNumerals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

// iterate and print out all keys and values of the romanNumeral object
// for (const [key, value] of Object.entries(romanNumerals)) {
//   console.log(`${key}: ${value}`);
// }
