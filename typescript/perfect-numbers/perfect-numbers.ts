export function classify(num: number) {
  if (num < 1) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  const aliquotSumValue = aliquotSum(num);
  if (aliquotSumValue === num) {
    return "perfect";
  } else if (aliquotSumValue > num) {
    return "abundant";
  } else {
    return "deficient";
  }
}

function aliquotSum(num: number) {
  let temp = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  return temp;
}
