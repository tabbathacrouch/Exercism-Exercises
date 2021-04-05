// exercism --> food chain
// Generate the lyrics of the song 'I Know an Old Lady Who Swallowed a Fly'.
// While you could copy/paste the lyrics, or read them from a file, this problem is much more interesting if you approach it algorithmically.
// This is a cumulative song of unknown origin.
// This is one of many common variants.

// I know an old lady who swallowed a fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a spider.
// It wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a bird.
// How absurd to swallow a bird!
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a cat.
// Imagine that, to swallow a cat!
// She swallowed the cat to catch the bird.
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a dog.
// What a hog, to swallow a dog!
// She swallowed the dog to catch the cat.
// She swallowed the cat to catch the bird.
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a goat.
// Just opened her throat and swallowed a goat!
// She swallowed the goat to catch the dog.
// She swallowed the dog to catch the cat.
// She swallowed the cat to catch the bird.
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a cow.
// I don't know how she swallowed a cow!
// She swallowed the cow to catch the goat.
// She swallowed the goat to catch the dog.
// She swallowed the dog to catch the cat.
// She swallowed the cat to catch the bird.
// She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// I don't know why she swallowed the fly. Perhaps she'll die.

// I know an old lady who swallowed a horse.
// She's dead, of course!

export class Song {
  constructor() {
    this.animals = [
      "fly",
      "spider",
      "bird",
      "cat",
      "dog",
      "goat",
      "cow",
      "horse",
    ];
    this.descriptors = {
      fly: `I don't know why she swallowed the fly. Perhaps she'll die.\n`,
      spider: `It wriggled and jiggled and tickled inside her.\n`,
      bird: `How absurd to swallow a bird!\n`,
      cat: `Imagine that, to swallow a cat!\n`,
      dog: `What a hog, to swallow a dog!\n`,
      goat: `Just opened her throat and swallowed a goat!\n`,
      cow: `I don't know how she swallowed a cow!\n`,
      horse: `She's dead, of course!\n`,
    };
  }
  verse(n) {
    n--;
    const introVerse =
      `I know an old lady who swallowed a ` + this.animals[n] + `.\n`;
    const endVerse = n === 7 ? this.descriptors.horse : this.descriptors.fly;
    let middleVerse =
      n === 0 ? "" : n === 7 ? "" : this.descriptors[this.animals[n]];
    if (n !== 0 && n !== 7) {
      for (let i = n; i > 0; i--) {
        middleVerse +=
          `She swallowed the ` +
          this.animals[i] +
          ` to catch the ` +
          this.animals[i - 1];
        if (i === 2) {
          middleVerse += ` that wriggled and jiggled and tickled inside her.\n`;
        } else {
          middleVerse += `.\n`;
        }
      }
    }
    return introVerse + middleVerse + endVerse;
  }

  verses(start, end) {
    let song = ``;
    for (let i = start; i <= end; i++) {
      song += this.verse(i) + `\n`;
    }
    return song;
  }
}
