export class Triangle {
  _sideA;
  _sideB;
  _sideC;
  isInvalidTriangle;
  constructor(...sides: number[]) {
    this._sideA = sides[0];
    this._sideB = sides[1];
    this._sideC = sides[2];
    this.isInvalidTriangle =
      this._sideA === 0 ||
      this._sideB === 0 ||
      this._sideC === 0 ||
      this._sideA + this._sideB <= this._sideC ||
      this._sideA + this._sideC <= this._sideB ||
      this._sideB + this._sideC <= this._sideA;
  }

  get isEquilateral() {
    if (this.isInvalidTriangle) return false;
    return this._sideA === this._sideB && this._sideB === this._sideC;
  }

  get isIsosceles() {
    return (
      !this.isInvalidTriangle &&
      (this._sideA === this._sideB ||
        this._sideB === this._sideC ||
        this._sideA === this._sideC)
    );
  }

  get isScalene() {
    return (
      !this.isInvalidTriangle &&
      this._sideA !== this._sideB &&
      this._sideB !== this._sideA &&
      this._sideA !== this._sideC
    );
  }
}
