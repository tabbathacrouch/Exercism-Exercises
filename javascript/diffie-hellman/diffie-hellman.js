// exercism --> diffie-hellman
// Diffie-Hellman key exchange.
// Alice and Bob use Diffie-Hellman key exchange to share secrets.
// They start with prime numbers, pick private keys, generate and
// share public keys, and then generate a shared secret key.
// Step 0
// The test program supplies prime numbers p and g.
// Step 1
// Alice picks a private key, a, greater than 1 and less than p.
// Bob does the same to pick a private key b.
// Step 2
// Alice calculates a public key A.
// A = g**a mod p
// Using the same p and g, Bob similarly calculates a public key B
// from his private key b.
// Step 3
// Alice and Bob exchange public keys. Alice calculates secret key s.
// s = B**a mod p
// Bob calculates
// s = A**b mod p
// The calculations produce the same result! Alice and Bob now
// share secret s.

export class DiffieHellman {
  constructor(p, g) {
    this.p = p;
    this.g = g;
    this.checkArguments();
  }

  // Verifies that the given primes are in the correct range and are actually prime.
  checkArguments() {
    const givenPrimes = [this.p, this.g];
    givenPrimes.map(this.isInRange).map(this.isPrime);
  }

  // Constructor arguments must be greater than 1 and less than 9,999. 
  isInRange(num) {
    if (num < 1 || num > 9999) throw new Error();
    return num;
  }

  // Constructor arguments must be prime numbers. 
  isPrime(num) {
    for(let i = 2; i < num; i++) {
    if(num % i === 0) { throw new Error() };
    return num > 1;
  }}

  getPublicKey(privateKey) {
    if (privateKey <= 1) throw new Error();
    if (privateKey >= this.p) throw new Error();
    return this.g ** privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
}
