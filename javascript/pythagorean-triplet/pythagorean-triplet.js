// exercism --> pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, {a, b, c}, for which,
// a**2 + b**2 = c**2
// and such that,
// a < b < c
// For example,
// 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
// Given an input integer N, find all Pythagorean triplets for which a + b + c = N.
// For example, with N = 1000, there is exactly one Pythagorean triplet for which a + b + c = 1000: {200, 375, 425}.
// By default, only sum is given to the triplets function, but it may optionally also receive minFactor and/or maxFactor. When these are given, make sure each factor of the triplet is at least minFactor and at most maxFactor.

// -----1st attempt-----
export function triplets({ minFactor, maxFactor, sum }) {
  const min = minFactor || 1;
  const max = maxFactor || sum;
  const sumABC = sum;
  let tripletArray = [];

  for (let c = max; c >= min; c--) {
    for (let a = min; a <= max; a++) {
      let b = sumABC - (c + a);
      if (a > b) {
        break;
      }
      if (a ** 2 + b ** 2 === c ** 2) tripletArray.push(new Triplet(a, b, c));
    }
  }
  return tripletArray;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
