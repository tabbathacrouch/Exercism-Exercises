// exercism --> sum of multiples
// Given a number, find the sum of all the unique multiples of particular numbers up to but not including that number.
// If we list all the natural numbers below 20 that are multiples of 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18.
// The sum of these multiples is 78.

export const sum = (factors, limit) => {
  return [...Array(limit).keys()].reduce(
    (acc, curr) =>
      acc + (factors.some((factor) => curr % factor === 0) ? curr : 0),
    0
  );
};

// -----1st attempt----- (FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory)
// let sum = [];
// for (let i = 0; i < factors.length; i++){
//   if(factors[i] > limit){
//     break;
//   }
//   sum.push(factors[i]);
//   let factor = 2;
//   while(factors[i] * factor < limit){
//     sum.push(factors[i] * factor)
//     factor ++;
//   }
// }
// return sum.filter((value, index) => sum.indexOf(value) === index).reduce((acc, curr) => {return acc + curr}, 0);
