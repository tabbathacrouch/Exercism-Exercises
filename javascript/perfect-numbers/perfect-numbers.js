// exercism.io --> perfect-numbers

export const classify = (n) => {
  if (n <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  let sumOfFactors = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sumOfFactors = sumOfFactors + i;
    }
  }
  if (sumOfFactors === n) {
    return "perfect";
  }
  if (sumOfFactors > n) {
    return "abundant";
  }
  return "deficient";
};
