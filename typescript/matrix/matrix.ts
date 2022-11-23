export class Matrix {
  _rows: number[][];

  constructor(shape: string) {
    this._rows = shape.split("\n").map((row) => row.split(" ").map(Number));
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._rows[0].map((_, i) => this._rows.map((row) => row[i]));
  }
}
