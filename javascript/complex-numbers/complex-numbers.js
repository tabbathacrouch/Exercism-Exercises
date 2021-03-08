//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  add() {
    return new ComplexNumber(this.a, this.b);
  }

  sub() {
    throw new Error('Remove this statement and implement this function');
  }

  div() {
    throw new Error('Remove this statement and implement this function');
  }

  mul() {
    throw new Error('Remove this statement and implement this function');
  }

  get abs() {
    throw new Error('Remove this statement and implement this function');
  }

  get conj() {
    throw new Error('Remove this statement and implement this function');
  }

  get exp() {
    throw new Error('Remove this statement and implement this function');
  }
}
