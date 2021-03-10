// exercism.io --> isogram
// Determine if a word or phrase is an isogram.
// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.
// Examples of isograms:
// lumberjacks
// background
// downstream
// six-year-old
// The word isograms, however, is not an isogram, because the s repeats.

export const isIsogram = (string) => {
  const iso = string
    .toLowerCase()
    .split("")
    .filter((c) => ![" ", "-"].includes(c));

  return new Set(iso).size === iso.length;
};

// -----1st attempt-----
// export const isIsogram = (string) => {
//   if (string.length === 0) {
//     return true;
//   }
//   let lowercase = string.toLowerCase().replace(/-|\s/g,'');
//   let newString = '';
//   for (var i = 0; i < lowercase.length; i++) {
//     if(!newString.includes(lowercase.charAt(i))){
//       newString = newString.concat(lowercase.charAt(i));
//     }
//   }
//   if (newString === lowercase){
//     return true;
//   }
//   return false;
// };