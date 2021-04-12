// exercism --> all your base
// Convert a number, represented as a sequence of digits in one base, to any other base.
// Implement general base conversion. Given a number in base a, represented as a sequence of digits, convert it to base b.
// Note
// Try to implement the conversion yourself. Do not use something else to perform the conversion for you.
// About Positional Notation
// In positional notation, a number in base b can be understood as a linear combination of powers of b.
// The number 42, in base 10, means:
// (4 * 10^1) + (2 * 10^0)
// The number 101010, in base 2, means:
// (1 * 2^5) + (0 * 2^4) + (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (0 * 2^0)
// The number 1120, in base 3, means:
// (1 * 3^3) + (1 * 3^2) + (2 * 3^1) + (0 * 3^0)
// I think you got the idea!
// Yes. Those three numbers above are exactly the same. Congratulations!

export const convert = (digits, oldBase, newBase) => {
  if (oldBase < 2) {
    throw new Error("Wrong input base");
  }
  if (newBase < 2) {
    throw new Error("Wrong output base");
  }
  if (
    digits.length === 0 ||
    (digits.length > 1 && digits[0] === 0) ||
    digits.some((x) => x < 0 || x >= oldBase)
  ) {
    throw new Error("Input has wrong format");
  }

  let sum = digits.reduce((acc, curr) => acc * oldBase + curr);
  if (sum === 0) {
    return [0];
  }
  let output = [];
  while (sum !== 0) {
    output.unshift(sum % newBase);
    sum = Math.trunc(sum / newBase);
  }
  return output;
};
