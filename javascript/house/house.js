// exercism --> house
// Recite the nursery rhyme 'This is the House that Jack Built'.
// [The] process of placing a phrase of clause within another phrase of clause is called embedding. It is through the processes of recursion and embedding that we are able to take a finite number of forms (words and phrases) and construct an infinite number of expressions. Furthermore, embedding also allows us to construct an infinitely long structure, in theory anyway.
// papyr.com
// The nursery rhyme reads as follows:
// This is the house that Jack built.

// This is the malt
// that lay in the house that Jack built.

// This is the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the maiden all forlorn
// that milked the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the man all tattered and torn
// that kissed the maiden all forlorn
// that milked the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the priest all shaven and shorn
// that married the man all tattered and torn
// that kissed the maiden all forlorn
// that milked the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the rooster that crowed in the morn
// that woke the priest all shaven and shorn
// that married the man all tattered and torn
// that kissed the maiden all forlorn
// that milked the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the farmer sowing his corn
// that kept the rooster that crowed in the morn
// that woke the priest all shaven and shorn
// that married the man all tattered and torn
// that kissed the maiden all forlorn
// that milked the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

// This is the horse and the hound and the horn
// that belonged to the farmer sowing his corn
// that kept the rooster that crowed in the morn
// that woke the priest all shaven and shorn
// that married the man all tattered and torn
// that kissed the maiden all forlorn
// that milked the cow with the crumpled horn
// that tossed the dog
// that worried the cat
// that killed the rat
// that ate the malt
// that lay in the house that Jack built.

const startVerses = [
  "This is the house that Jack built.",
  "This is the malt",
  "This is the rat",
  "This is the cat",
  "This is the dog",
  "This is the cow with the crumpled horn",
  "This is the maiden all forlorn",
  "This is the man all tattered and torn",
  "This is the priest all shaven and shorn",
  "This is the rooster that crowed in the morn",
  "This is the farmer sowing his corn",
  "This is the horse and the hound and the horn",
];

const endVerses = [
  "that lay in the house that Jack built.",
  "that ate the malt",
  "that killed the rat",
  "that worried the cat",
  "that tossed the dog",
  "that milked the cow with the crumpled horn",
  "that kissed the maiden all forlorn",
  "that married the man all tattered and torn",
  "that woke the priest all shaven and shorn",
  "that kept the rooster that crowed in the morn",
  "that belonged to the farmer sowing his corn",
];

export class House {
  static verse(num) {
    return [startVerses[num - 1], ...endVerses.slice(0, num - 1).reverse()];
  }

  static verses(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, x) => House.verse(start + x).concat([""]))
      .flat()
      .slice(0, -1);
  }
}

