//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  return new Set(str.toLowerCase().match(/[a-z]/g)).size === 26;/
};


// *** 1st attempt, abandoned approach when I realized the missing letter test cases would be hard to pass. ***
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let str2 = str.toLowerCase().replace(/\s/g, "");
// if (str2.length < alphabet.length) {
//   return false;
// } else {
//   for (let i = 0; i < str2.length; i++) {
//     if (str2.indexOf(alphabet[i]) === -1) {
//       return true;
//     }
//   }
//   return true;
// }
// ***from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// Using the constructor function provides runtime compilation of the 
// regular expression. Use the constructor function when you know the 
// regular expression pattern will be changing, or you don't know the 
// pattern and are getting it from another source, such as user input.***