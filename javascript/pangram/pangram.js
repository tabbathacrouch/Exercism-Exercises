// exercism --> pangram
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. 
// The best known English pangram is:
// The quick brown fox jumps over the lazy dog.
// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

export const isPangram = (str) => {
  return new Set(str.toLowerCase().match(/[a-z]/g)).size === 26;
};

// -----1st attempt----- (abandoned approach when I realized the missing letter test cases would be hard to pass)
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