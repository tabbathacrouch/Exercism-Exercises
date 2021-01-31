//exercism.io --> difference-of-squares

export class Squares {
  constructor(n) {
    this.n = n;
    this.squareOfSumValue = 0;
    this.sumOfSquaresValue = 0;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }
    this.squareOfSumValue = sum ** 2;
    return this.squareOfSumValue;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let j = this.n; j > 0; j--) {
      sum += j ** 2;
    }
    this.sumOfSquaresValue = sum;
    return sum;
  }

  get difference() {
    return this.squareOfSumValue - this.sumOfSquaresValue;
  }
}
