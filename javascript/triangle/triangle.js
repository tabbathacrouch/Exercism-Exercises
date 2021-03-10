// exercism --> trianlge
// Determine if a triangle is equilateral, isosceles, or scalene.
// An equilateral triangle has all three sides the same length.
// An isosceles triangle has at least two sides the same length.
// (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)
// A scalene triangle has all sides of different lengths.

// ------ 2nd attempt ----- 
export class Triangle {
  constructor(...sides) {
    this.triangle = sides.sort();
    this.a = this.triangle[0];
    this.b = this.triangle[1];
    this.c = this.triangle[2];
    this.invalidTriangle =
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a;
  }

  get isEquilateral() {
    return this.a === 0 || this.b === 0 || this.c === 0
      ? false
      : this.triangle.every((side) => side === this.a);
  }

  get isIsosceles() {
    return this.invalidTriangle
      ? false
      : this.a === this.b || this.b === this.c || this.a === this.c;
  }

  get isScalene() {
    return this.a != this.b &&
      this.b != this.c &&
      this.c != this.a &&
      !this.invalidTriangle
      ? true
      : false;
  }
}

// ------alternative solution------
// export class Triangle {
//   constructor(...sides) {
//     [this.a, this.b, this.c] = sides;
//     this.isValid =
//       this.a > 0
//       && this.b > 0
//       && this.c > 0
//       && this.a + this.b > this.c
//       && this.b + this.c > this.a
//       && this.c + this.a > this.b;
//   }

//   get isEquilateral() {
//     return this.isValid && this.a == this.b && this.a == this.c;
//   }

//   get isIsosceles() {
//     return this.isValid && (this.a == this.b || this.b == this.c || this.c == this.a || this.isEquilateral);
//   }

//   get isScalene() {
//     return this.isValid && !this.isEquilateral && !this.isIsosceles;
//   }
// }

// -----1st attempt-----
// export class Triangle {
//   constructor(...sides) {
//     this.triangle = [...sides];
//   }

//   get isEquilateral() {
//     return (
//       this.triangle[0] !== 0 &&
//       this.triangle.every((side) => side === this.triangle[0])
//     );
//   }

//   get isIsosceles() {
//     if (
//       this.triangle[0] === this.triangle[1] &&
//       this.triangle[0] + this.triangle[1] >= this.triangle[2]
//     ) {
//       return true;
//     }
//     if (
//       this.triangle[1] === this.triangle[2] &&
//       this.triangle[1] + this.triangle[2] >= this.triangle[0]
//     ) {
//       return true;
//     }
//     if (
//       this.triangle[0] === this.triangle[2] &&
//       this.triangle[0] + this.triangle[2] >= this.triangle[1]
//     ) {
//       return true;
//     }
//     return false;
//   }

//   get isScalene() {
//     if (
//       this.triangle[0] != this.triangle[1] &&
//       this.triangle[1] != this.triangle[2] &&
//       this.triangle[2] != this.triangle[0]
//     ) {
//       if (
//         this.triangle[0] + this.triangle[1] <= this.triangle[2] ||
//         this.triangle[0] + this.triangle[2] <= this.triangle[1] ||
//         this.triangle[1] + this.triangle[2] <= this.triangle[0]
//       ) {
//         return false;
//       }
//       return true;
//     }
//     return false;
//   }
// }