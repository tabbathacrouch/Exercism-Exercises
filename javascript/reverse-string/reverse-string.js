// exercism --> reverse string
// Reverse a string
// For example: input: "cool" output: "looc"

export const reverseString = (str) => {
  return str.split('').reverse().join('');
};
