// exercism --> roman-numerals
// Write a function to convert from normal numbers to Roman Numerals.
// The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.
// The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).
//  1  => I
// 10  => X
//  7  => VII
// There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
// Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.
// To see this in practice, consider the example of 1990.
// In Roman numerals 1990 is MCMXC:
// 1000=M 900=CM 90=XC
// 2008 is written as MMVIII:
// 2000=MM 8=VIII
// See also: http://www.novaroma.org/via_romana/numbers.html

// ---1st attempt---
// export const toRoman = (n) => {
//   let romanNumeral = "";

//   while (n > 0) {
//     const thousands = Math.floor(n / 1000);
//     n -= thousands * 1000;
//     romanNumeral += "M".repeat(thousands);

//     const fiveHundreds = Math.floor(n / 500);
//     n -= fiveHundreds * 500;
//     romanNumeral += "D".repeat(fiveHundreds);

//     const hundreds = Math.floor(n / 100);
//     n -= hundreds * 100;
//     romanNumeral += "C".repeat(hundreds);

//     const fifties = Math.floor(n / 50);
//     n -= fifties * 50;
//     romanNumeral += "L".repeat(fifties);

//     const tens = Math.floor(n / 10);
//     n -= tens * 10;
//     romanNumeral += "X".repeat(tens);

//     const fives = Math.floor(n / 5);
//     n -= fives * 5;
//     romanNumeral += "V".repeat(fives);

//     const ones = Math.floor(n);
//     romanNumeral += "I".repeat(ones);
//     n -= ones * 1;
//   }

//   // clean up 4's and 9's
//   romanNumeral = romanNumeral.replace(/I{4}/, "IV");
//   romanNumeral = romanNumeral.replace(/VI{4}/, "IX");
//   romanNumeral = romanNumeral.replace(/X{4}/, "XL");
//   romanNumeral = romanNumeral.replace(/LX{4}/, "XC");
//   romanNumeral = romanNumeral.replace(/C{4}/, "CD");
//   romanNumeral = romanNumeral.replace(/DC{4}/, "CM");
//   romanNumeral = romanNumeral.replace(/VIV/, "IX");
//   romanNumeral = romanNumeral.replace(/LXL/, "XC");
//   romanNumeral = romanNumeral.replace(/DCD/, "CM");

//   return romanNumeral;
// };

// ---2nd attempt---
const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

export const toRoman = (n) => {
  let romanNumeral = "";
  let symbol = romanNumerals.find((x) => x.value <= n);

  if (symbol !== undefined) {
    return symbol.value === n
      ? symbol.numeral
      : `${symbol.numeral}${toRoman(n - symbol.value)}`;
  }

  return romanNumeral;
};
