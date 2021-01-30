//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// *** 1st attempt ***
// export const toRna = (dna) => {
//   if (!STRANDS[dna] && dna.length < 1) {
//     return "";
//   } else if (dna.length === 1) {
//     return STRANDS[dna];
//   } else {
//     var rna = dna.split("");
//     const rnamap = rna.map((element) => STRANDS[element]);
//     return rnamap.join("");
//   }
// };

export const toRna = (dna) => {
  if (!dna.length) {
    return "";
  }
  return (
    STRANDS[dna] ||
    dna
      .split("")
      .map((nucleotide) => STRANDS[nucleotide])
      .join("")
  );
};

export const STRANDS = { G: "C", C: "G", T: "A", A: "U" };
