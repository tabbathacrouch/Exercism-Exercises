//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (value) => {
  let sound = "";
  sound += value % 3 === 0 ? "Pling" : "";
  sound += value % 5 === 0 ? "Plang" : "";
  sound += value % 7 === 0 ? "Plong" : "";
  return sound || value.toString();
};

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



  // if (value % 3 === 0 && value % 5 === 0) {
  //   return divisibleBy3 + divisibleBy5;
  // }
  // if (value % 3 === 0) {
  //   return divisibleBy3;
  // }
  // if (value % 5 === 0) {
  //   return divisibleBy5;
  // }
  // if (value % 7 === 0) {
  //   return divisibleBy7;
  // }
  // return value.toString();