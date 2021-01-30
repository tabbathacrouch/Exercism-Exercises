//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.triangle = [...sides];
  }

  get isEquilateral() {
    return (
      this.triangle[0] !== 0 &&
      this.triangle.every((side) => side === this.triangle[0])
    );
    // if (
    //   this.triangle[0] === this.triangle[1] &&
    //   this.triangle[1] === this.triangle[2] &&
    //   this.triangle[0] === this.triangle[2] &&
    //   this.triangle[0] !== 0
    // ) {
    //   return true;
    // }
    // return false;
  }

  get isIsosceles() {
    if (
      this.triangle[0] === this.triangle[1] &&
      this.triangle[0] + this.triangle[1] >= this.triangle[2]
    ) {
      return true;
    }
    if (
      this.triangle[1] === this.triangle[2] &&
      this.triangle[1] + this.triangle[2] >= this.triangle[0]
    ) {
      return true;
    }
    if (
      this.triangle[0] === this.triangle[2] &&
      this.triangle[0] + this.triangle[2] >= this.triangle[1]
    ) {
      return true;
    }
    return false;
  }

  get isScalene() {
    if (
      this.triangle[0] != this.triangle[1] &&
      this.triangle[1] != this.triangle[2] &&
      this.triangle[2] != this.triangle[0]
    ) {
      if (
        this.triangle[0] + this.triangle[1] <= this.triangle[2] ||
        this.triangle[0] + this.triangle[2] <= this.triangle[1] ||
        this.triangle[1] + this.triangle[2] <= this.triangle[0]
      ) {
        return false;
      }
      return true;
    }
    return false;
  }
}
