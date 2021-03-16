// exercism --> beer-song
// Recite the lyrics to that beloved classic, that field-trip favorite: 99 Bottles of Beer on the Wall.
// Note that not all verses are identical.
// For bonus points
// Did you get the tests passing and the code clean? If you want to, these are some additional things you could try:
// Remove as much duplication as you possibly can.
// Optimize for readability, even if it means introducing duplication.
// If you've removed all the duplication, do you have a lot of conditionals? Try replacing the conditionals with polymorphism, if it applies in this language. How readable is it?
// Then please share your thoughts in a comment on the submission. Did this experiment make the code better? Worse? Did you learn anything from it?

export const recite = (initialBottlesCount, takeDownCount) => {
  const song = [];
  let bottleCount = initialBottlesCount;
  for (let i = 0; i < takeDownCount; i++) {
    if (i !== 0) {
      song.push("");
      songLyrics(bottleCount);
    } else {
      songLyrics(bottleCount);
    }
    bottleCount--;
  }
  function songLyrics(count) {
    if (count > 1) {
      song.push(`${count} bottles of beer on the wall, ${count} bottles of beer.`);
      if (count - 1 !== 1) {
        song.push(`Take one down and pass it around, ${count - 1} bottles of beer on the wall.`);
      } else {
        song.push(`Take one down and pass it around, 1 bottle of beer on the wall.`);
      }
    } else if (count === 1) {
      song.push("1 bottle of beer on the wall, 1 bottle of beer.");
      song.push("Take it down and pass it around, no more bottles of beer on the wall.");
    } else {
      song.push("No more bottles of beer on the wall, no more bottles of beer.");
      song.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
  }
  return song;
};
