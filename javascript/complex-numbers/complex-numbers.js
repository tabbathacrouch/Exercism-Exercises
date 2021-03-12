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

  add(n) {
    this.a += n.real;
    this.b += n.imag;
    return this;
  }

  sub(n) {
    this.a -= n.real;
    this.b -= n.imag;
    return this;
  }

  mul(n) {
    const real = (this.a * n.real) - (this.b * n.imag);
		this.b = (this.a * n.imag) + (this.b * n.real);
    this.a = real;
		return this;
  }

  div(n) {
    const sumSq = (n.real * n.real) + (n.imag * n.imag);
    const real = ((this.a * n.real) + (this.b * n.imag))/sumSq;
		this.b = ((this.b * n.real) - (this.a * n.imag))/sumSq;
		this.a = real;
		return this;
  }

  get abs() {
    return Math.sqrt((this.a * this.a) + (this.b * this.b));
  }

  get conj() {
    return new ComplexNumber(this.a, this.b ? -this.b: 0)
  }

  get exp() {
    const eulerA = Math.exp(this.a);
		return new ComplexNumber(eulerA * Math.cos(this.b), eulerA * Math.sin(this.b));
	
  }
}
