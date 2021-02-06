// exercism --> luhn
// The first step of the Luhn algorithm is to double every second digit, starting from the right.
// If doubling the number results in a number greater than 9 then subtract 9 from the product.
// Then sum all of the digits.
// If the sum is evenly divisible by 10 (or equal to 0), then the number is valid.

// 1st attempt
export const valid = (identificationNumber) => {
  const cleanIdentificationNumber = identificationNumber.replace(/\s/g, "");
  // cases that are invalid based on length or unwanted character
  if (
    cleanIdentificationNumber.length <= 1 ||
    cleanIdentificationNumber.includes("a") ||
    cleanIdentificationNumber.includes("b") ||
    cleanIdentificationNumber.includes("#") ||
    cleanIdentificationNumber.includes("-") ||
    cleanIdentificationNumber.includes(":")
  ) {
    return false;
  }
  const digits = cleanIdentificationNumber
    .split("")
    .map((digit) => parseInt(digit));
  // grab all the second digits starting from the right and others (remaining)
  let secondDigits = [];
  let remainingDigits = [];
  if (isEven(digits.length)) {
    secondDigits = digits.filter((element, index) => {
      return isEven(index);
    });
    remainingDigits = digits.filter((element, index) => {
      return isOdd(index);
    });
  } else {
    secondDigits = digits.filter((element, index) => {
      return isOdd(index);
    });
    remainingDigits = digits.filter((element, index) => {
      return isEven(index);
    });
  }
  function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n % 2));
  }
  function isOdd(n) {
    return isEven(Number(n) + 1);
  }
  // double the second digits, if > 9, subtract
  const doubledDigits = [];
  for (let i = 0; i < secondDigits.length; i++) {
    if (secondDigits[i] * 2 > 9) {
      doubledDigits.push(secondDigits[i] * 2 - 9);
    } else {
      doubledDigits.push(secondDigits[i] * 2);
    }
  }
  // sum all of the digits
  const sum = remainingDigits
    .concat(doubledDigits)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  // valid when evenly divisible by 10 (or equal to 0)
  if (sum % 10 === 0 || sum === 0) {
    return true;
  } else {
    return false;
  }
};
