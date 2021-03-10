// exercism --> hamming
// Calculate the Hamming Distance between two DNA strands.
// Your body is made up of cells that contain DNA. Those cells regularly wear out and need replacing, which they achieve by dividing into daughter cells. In fact, the average human body experiences about 10 quadrillion cell divisions in a lifetime!
// When cells divide, their DNA replicates too. Sometimes during this process mistakes happen and single pieces of DNA get encoded with the incorrect information. If we compare two strands of DNA and count the differences between them we can see how many mistakes occurred. This is known as the "Hamming Distance".
// We read DNA using the letters C,A,G and T. Two strands might look like this:
// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^
// They have 7 differences, and therefore the Hamming Distance is 7.
// The Hamming Distance is useful for lots of things in science, not just biology, so it's a nice phrase to be familiar with :)
// Implementation notes
// The Hamming distance is only defined for sequences of equal length, so an attempt to calculate it between sequences of different lengths should not work. The general handling of this situation (e.g., raising an exception vs returning a special value) may differ between languages.

export const compute = (leftStrand, rightStrand) => {
  if (!leftStrand.length && rightStrand.length) {
    throw new Error("left strand must not be empty");
  }
  if (leftStrand.length && !rightStrand.length) {
    throw new Error("right strand must not be empty");
  }
  if (leftStrand.length !== rightStrand.length) {
    throw new Error("left and right strands must be of equal length");
  }
  return [...leftStrand].reduce(
    (hammingDistance, nucleotide, x) =>
      hammingDistance + (nucleotide === rightStrand[x] ? 0 : 1),
    0
  );
};

// -----1st attempt-----
// export const compute = (strand1, strand2) => {
//   let count = 0;
//   if (strand1 === strand2) {
//     return count;
//   }
//   if (strand1.length === 0) {
//     throw new Error("left strand must not be empty");
//   }
//   if (strand2.length === 0) {
//     throw new Error("right strand must not be empty");
//   }
//   if (strand1.length !== strand2.length) {
//     throw new Error("left and right strands must be of equal length");
//   }
//   for (let i = 0; i < strand1.length; i++) {
//     if (strand1[i] !== strand2[i]) {
//       count++;
//     }
//   }
//   return count;
// };
