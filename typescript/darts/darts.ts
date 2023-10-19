export function score(x: number, y: number): number {
  // If the dart lands in the inner circle (radius = 1) of the target, player earns 10 points.
  return areCoordinatesInsideCircle(x, y, 1)
    ? 10
    : // If the dart lands in the middle circle (radius = 5) of the target, player earns 5 points.
    areCoordinatesInsideCircle(x, y, 5)
    ? 5
    : // If the dart lands in the outer circle (radius = 10) of the target, player earns 1 point.
    areCoordinatesInsideCircle(x, y, 10)
    ? 1
    : // If the dart lands outside the target, player earns no points (0 points).
      0;
}

function areCoordinatesInsideCircle(
  x: number,
  y: number,
  circleRadius: number
): boolean {
  const distanceFromOrigin = Math.sqrt(x ** 2 + y ** 2);
  return distanceFromOrigin <= circleRadius;
}
