// exercism --> rational numbers
// A rational number is defined as the quotient of two integers a and b, called the numerator and denominator, respectively, where b != 0.
// The absolute value |r| of the rational number r = a/b is equal to |a|/|b|.
// The sum of two rational numbers r₁ = a₁/b₁ and r₂ = a₂/b₂ is r₁ + r₂ = a₁/b₁ + a₂/b₂ = (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂).
// The difference of two rational numbers r₁ = a₁/b₁ and r₂ = a₂/b₂ is r₁ - r₂ = a₁/b₁ - a₂/b₂ = (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂).
// The product (multiplication) of two rational numbers r₁ = a₁/b₁ and r₂ = a₂/b₂ is r₁ * r₂ = (a₁ * a₂) / (b₁ * b₂).
// Dividing a rational number r₁ = a₁/b₁ by another r₂ = a₂/b₂ is r₁ / r₂ = (a₁ * b₂) / (a₂ * b₁) if a₂ is not zero.
// Exponentiation of a rational number r = a/b to a non-negative integer power n is r^n = (a^n)/(b^n).
// Exponentiation of a rational number r = a/b to a negative integer power n is r^n = (b^m)/(a^m), where m = |n|.
// Exponentiation of a rational number r = a/b to a real (floating-point) number x is the quotient (a^x)/(b^x), which is a real number.
// Exponentiation of a real number x to a rational number r = a/b is x^(a/b) = root(x^a, b), where root(p, q) is the qth root of p.
// Implement the following operations:
// addition, subtraction, multiplication and division of two rational numbers,
// absolute value, exponentiation of a given rational number to an integer power, exponentiation of a given rational number to a real (floating-point) power, exponentiation of a real number to a rational number.
// Your implementation of rational numbers should always be reduced to lowest terms. For example, 4/4 should reduce to 1/1, 30/60 should reduce to 1/2, 12/8 should reduce to 3/2, etc. To reduce a rational number r = a/b, divide a and b by the greatest common divisor (gcd) of a and b. So, for example, gcd(12, 8) = 4, so r = 12/8 can be reduced to (12/4)/(8/4) = 3/2.
// Assume that the programming language you are using does not have an implementation of rational numbers.

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

export class Rational {
  constructor(numerator, denominator) {
    let divisor = gcd(numerator, denominator);
    this.numerator = numerator / divisor || 0;
    this.denominator = denominator / divisor || 0;
  }

  add(n) {
    return new Rational(
      this.numerator * n.denominator + n.numerator * this.denominator,
      this.denominator * n.denominator
    ).reduce();
  }

  sub(n) {
    return new Rational(
      this.numerator * n.denominator - n.numerator * this.denominator,
      this.denominator * n.denominator
    ).reduce();
  }

  mul(n) {
    return new Rational(
      this.numerator * n.numerator,
      this.denominator * n.denominator
    ).reduce();
  }

  div(n) {
    return new Rational(
      this.numerator * n.denominator,
      n.numerator * this.denominator
    ).reduce();
  }

  abs() {
    return new Rational(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    ).reduce();
  }

  exprational(n) {
    return n >= 0 ?
			new Rational(this.numerator ** n, this.denominator ** n).reduce():
			new Rational(this.denominator ** -n, this.numerator ** -n).reduce();
  }

  expreal(n) {
    return Math.round((n**this.numerator)**(1/this.denominator) * 100) / 100;
  }

  reduce() {
    return this;
  }
}
