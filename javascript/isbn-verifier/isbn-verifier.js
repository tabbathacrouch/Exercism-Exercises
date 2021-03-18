// exercism --> isbn verifier
// The ISBN-10 verification process is used to validate book identification numbers. These normally contain dashes and look like: 3-598-21508-8
// ISBN
// The ISBN-10 format is 9 digits (0 to 9) plus one check character (either a digit or an X only). In the case the check character is an X, this represents the value '10'. These may be communicated with or without hyphens, and can be checked for their validity by the following formula:
// (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0
// If the result is 0, then it is a valid ISBN-10, otherwise it is invalid.
// Example
// Let's take the ISBN-10 3-598-21508-8. We plug it in to the formula, and get:
// (3 * 10 + 5 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 1 * 5 + 5 * 4 + 0 * 3 + 8 * 2 + 8 * 1) mod 11 == 0
// Since the result is 0, this proves that our ISBN is valid.
// Task
// Given a string the program should check if the provided string is a valid ISBN-10. Putting this into place requires some thinking about preprocessing/parsing of the string prior to calculating the check digit for the ISBN.
// The program should be able to verify ISBN-10 both with and without separating dashes.
// Caveats
// Converting from strings to numbers can be tricky in certain languages. Now, it's even trickier since the check digit of an ISBN-10 may be 'X' (representing '10'). For instance 3-598-21507-X is a valid ISBN-10.


export const isValid = (isbn) => {
  const products = [];
  let multiplier = 10;
  for (let i = 0; i < isbn.length; i++) {
    const char =
      isbn[i] === "X" && i === isbn.length - 1 ? 10 : parseInt(isbn[i]);
    if (!isNaN(char)) {
      products.push(char * multiplier--);
    }
  }
  if (products.length !== 10) {
    return false;
  }
  return products.reduce((total, num) => total + num, 0) % 11 === 0;
};

// -----1st attempt-----
// export const isValid = (isbn) => {
//   const number = isbn.replace(/-/g, "").replace(/[A-W]/g, "");
//   if (number.length !== 10) {
//     return false;
//   }
//   let total = [];
//   let j = 10;
//   while (j > 0) {
//     for (let i = 0; i < 10; i++) {
//       if (number[i] === "X") {
//         total.push(10);
//       } else {
//         total.push(number[i] * j);
//       }
//       j--;
//     }
//   }
//   return total.reduce((acc, curr) => acc + curr, 0) % 11 === 0;
// };
