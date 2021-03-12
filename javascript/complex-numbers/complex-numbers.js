// exercism --> complex numbers
// A complex number is a number in the form a + b * i where a and b are real and i satisfies i^2 = -1.
// a is called the real part and b is called the imaginary part of z. The conjugate of the number a + b * i is the number a - b * i. The absolute value of a complex number z = a + b * i is a real number |z| = sqrt(a^2 + b^2).
// The square of the absolute value |z|^2 is the result of multiplication of z by its complex conjugate.
// The sum/difference of two complex numbers involves adding/subtracting their real and imaginary parts separately: (a + i * b) + (c + i * d) = (a + c) + (b + d) * i, (a + i * b) - (c + i * d) = (a - c) + (b - d) * i.
// Multiplication result is by definition (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i.
// The reciprocal of a non-zero complex number is 1 / (a + i * b) = a/(a^2 + b^2) - b/(a^2 + b^2) * i.
// Dividing a complex number a + i * b by another c + i * d gives: (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i.
// Raising e to a complex exponent can be expressed as e^(a + i * b) = e^a * e^(i * b), the last term of which is given by Euler's formula e^(i * b) = cos(b) + i * sin(b).
// Implement the following operations:
// addition, subtraction, multiplication and division of two complex numbers,
// conjugate, absolute value, exponent of a given complex number.
// Assume the programming language you are using does not have an implementation of complex numbers.

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
    const real = this.a * n.real - this.b * n.imag;
    this.b = this.a * n.imag + this.b * n.real;
    this.a = real;
    return this;
  }

  div(n) {
    const sumSq = n.real * n.real + n.imag * n.imag;
    const real = (this.a * n.real + this.b * n.imag) / sumSq;
    this.b = (this.b * n.real - this.a * n.imag) / sumSq;
    this.a = real;
    return this;
  }

  get abs() {
    return Math.sqrt(this.a * this.a + this.b * this.b);
  }

  get conj() {
    return new ComplexNumber(this.a, this.b ? -this.b : 0);
  }

  get exp() {
    const eulerA = Math.exp(this.a);
    return new ComplexNumber(
      eulerA * Math.cos(this.b),
      eulerA * Math.sin(this.b)
    );
  }
}
