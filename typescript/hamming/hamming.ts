export function compute(left: string, right: string): number {
  if (left.length !== right.length) {
    throw new Error("DNA strands must be of equal length.");
  } else if (left.localeCompare(right) === 0) {
    return 0;
  } else {
    return left.split("").filter((x, i) => right.split("")[i] !== x).length;
  }
}
