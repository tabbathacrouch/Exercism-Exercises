// exercism --> anagram
// An anagram is a rearrangement of letters to form a new word. Given a word and a list of candidates, select the sublist of anagrams of the given word.
// Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".

export const findAnagrams = (word, [...potentialAnagrams]) => {
  const searchArray = [...potentialAnagrams];
  let anagrams = [];
  searchArray.forEach((potentialAnagram) => {
    if (searchArray.includes(word)) {
      searchArray.pop(potentialAnagram);
    } else {
      let wordToCheck = potentialAnagram
        .toLowerCase()
        .split("")
        .sort()
        .join("");
      if (
        wordToCheck ===
        word
          .toLowerCase()
          .split("")
          .sort()
          .join("")
      ) {
        anagrams.push(potentialAnagram);
      }
    }
  });
  return anagrams;
};
