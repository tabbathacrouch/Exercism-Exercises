// exercism --> rna transcription
// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
// G -> C
// C -> G
// T -> A
// A -> U

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


// -----1st attempt-----
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