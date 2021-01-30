import { stringify } from "querystring";
import { isNull } from "util";

//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//
//
//*** 1st attempt ***
// export const twoFer = (name) => {
//   if (!name){name = 'you'};
//   let str1 = 'One for ';
//   let str2 = ', one for me.';
//   let str3 =  str1 + name + str2;
//   return str3;  
// };


export const twoFer = name => `One for ${name || "you"}, one for me.`;