// exercism --> anagram

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
