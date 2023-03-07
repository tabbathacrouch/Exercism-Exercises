export class DiffieHellman {
  public _p: number;
  public _g: number;

  constructor(p: number, g: number) {
    this._p = p;
    this._g = g;
    this.isInvalid();
  }

  isInvalid(): Error | undefined {
    if (
      !this.isPrime(this._p) ||
      !this.isPrime(this._g) ||
      this._p < 1 ||
      this._g < 1 ||
      this._p > 9999 ||
      this._g > 9999
    ) {
      throw new Error();
    }
    return;
  }

  isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
      return num > 1;
    }
    return false;
  }

  public getPublicKey(privateKey: number): number | Error {
    if (privateKey <= 1 || privateKey >= this._p) {
      throw new Error();
    }
    return this._g ** privateKey % this._p;
  }

  public getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return theirPublicKey ** myPrivateKey % this._p;
  }
}
