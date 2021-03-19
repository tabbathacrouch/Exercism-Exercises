// exercism --> nth prime
// Given a number n, determine what the nth prime is.
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// If your language provides methods in the standard library to deal with prime numbers, pretend they don't exist and implement them yourself.

export const prime = (num) => {
  if (num === 0) {
    throw new Error("there is no zeroth prime");
  }
  const primes = [];
  let q = 2;
  while (primes.length < num) {
    if (isPrime(q)) {
      primes.push(q);
    }
    q++;
  }
  return primes.pop();
};

// helper function to check if a number is prime
const isPrime = (n) => {
  for (let i = 2; i <= n * 0.5; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
