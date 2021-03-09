// exercism --> darts
// Write a function that returns the earned points in a single toss of a Darts game.
// Darts is a game where players throw darts to a target.
// In our particular instance of the game, the target rewards with 4 different amounts of points, depending on where the dart lands:
// If the dart lands outside the target, player earns no points (0 points).
// If the dart lands in the outer circle of the target, player earns 1 point.
// If the dart lands in the middle circle of the target, player earns 5 points.
// If the dart lands in the inner circle of the target, player earns 10 points.
// The outer circle has a radius of 10 units (This is equivalent to the total radius for the entire target), the middle circle a radius of 5 units, and the inner circle a radius of 1. Of course, they are all centered to the same point (That is, the circles are concentric) defined by the coordinates (0, 0).
// Write a function that given a point in the target (defined by its real cartesian coordinates x and y), returns the correct amount earned by a dart landing in that point.

export const score = (x, y) => {
  const xSquared = x**2;
  const ySquared = y**2;
  const circle = xSquared + ySquared;
  if (circle > 100){
    return 0;
  }
  else if (circle > 25){
    return 1;
  }
  else if (circle > 1){
    return 5;
  }
  else {
    return 10;
  }
};
