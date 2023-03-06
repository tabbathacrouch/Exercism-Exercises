const SEQUENCE = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
  STOP: ["UAA", "UAG", "UGA"],
};

export function translate(RNA: string): string[] {
  let proteins: string[] = [];
  const codons = RNA.match(new RegExp(".{1," + 3 + "}", "g"));
  if (codons) {
    for (const codon of codons) {
      let proteinIndex = Object.values(SEQUENCE).findIndex((c) =>
        c.includes(codon)
      );
      if (proteinIndex === -1) {
        throw new Error("Invalid codon");
      }
      if (proteinIndex === 7) {
        return proteins;
      } else {
        proteins.push(Object.keys(SEQUENCE)[proteinIndex]);
      }
    }
  }
  return proteins;
}
