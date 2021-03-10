// exercism --> raindrops
// Your task is to convert a number into a string that contains raindrop sounds corresponding to certain potential factors. A factor is a number that evenly divides into another number, leaving no remainder. The simplest way to test if a one number is a factor of another is to use the modulo operation.
// The rules of raindrops are that if a given number:
// has 3 as a factor, add 'Pling' to the result.
// has 5 as a factor, add 'Plang' to the result.
// has 7 as a factor, add 'Plong' to the result.
// does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.
// Examples
// 28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
// 30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
// 34 is not factored by 3, 5, or 7, so the result would be "34".

export const convert = (value) => {
  let sound = "";
  sound += value % 3 === 0 ? "Pling" : "";
  sound += value % 5 === 0 ? "Plang" : "";
  sound += value % 7 === 0 ? "Plong" : "";
  return sound || value.toString();
};

// -----2nd attempt-----
// export const convert = (value) => {
//   let sound = "";
//   if (value % 3 === 0 ) {
//     sound += "Pling";
//   }
//   if (value % 5 === 0 ) {
//     sound += "Plang";
//   }
//   if (value % 7 === 0 ) {
//     sound += "Plong";
//   }
//   return sound || value.toString();
// };

// -----1st attempt-----
// export const convert = (value) => {
//   const divisibleBy3 = "Pling";
//   const divisibleBy5 = "Plang";
//   const divisibleBy7 = "Plong";
//   let string = value.toString();
//   if (value % 3 === 0 && value % 5 === 0 && value % 7 === 0){
//     string = divisibleBy3 + divisibleBy5 + divisibleBy7;
//   }
//   else if (value % 3 === 0 && value % 5 === 0){
//     string = divisibleBy3 + divisibleBy5;
//   }
//   else if (value % 3 === 0 && value % 7 === 0){
//     string = divisibleBy3 + divisibleBy7;
//   }
//   else if (value % 5 === 0 && value % 7 === 0){
//     string = divisibleBy5 + divisibleBy7;
//   }
//   else if (value % 3 === 0){
//     string = divisibleBy3;
//   }
//   else if (value % 5 === 0){
//     string = divisibleBy5;
//   }
//   else if (value % 7 === 0){
//     string = divisibleBy7;
//   }
//   return string;
// };
