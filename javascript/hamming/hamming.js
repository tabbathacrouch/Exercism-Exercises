// exercism --> hamming

export const compute = (strand1, strand2) => {
  let count = 0;
  if (strand1 === strand2) {
    return count;
  }
  if (strand1.length === 0) {
    throw new Error("left strand must not be empty");
  }
  if (strand2.length === 0) {
    throw new Error("right strand must not be empty");
  }
  if (strand1.length !== strand2.length) {
    throw new Error("left and right strands must be of equal length");
  }
  for (let i = 0; i < strand1.length; i++) {
    if (strand1[i] !== strand2[i]) {
      count++;
    }
  }
  return count;
};
