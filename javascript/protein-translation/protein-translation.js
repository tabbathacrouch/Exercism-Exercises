// exercism --> protein-translation
// Translate RNA sequences into proteins.
// RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:
// RNA: "AUGUUUUCU" => translates to
// Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>
// Protein: "Methionine", "Phenylalanine", "Serine"
// There are 64 codons which in turn correspond to 20 amino acids; however, all of the codon sequences and resulting amino acids are not important in this exercise. 
// If it works for one codon, the program should work for all of them. However, feel free to expand the list in the test suite to include them all.
// There are also three terminating codons (also known as 'STOP' codons); if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated.
// All subsequent codons after are ignored, like this:
// RNA: "AUGUUUUCUUAAAUG" =>
// Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>
// Protein: "Methionine", "Phenylalanine", "Serine"
// Note the stop codon "UAA" terminates the translation and the final methionine is not translated into the protein sequence.
// Below are the codons and resulting Amino Acids needed for the exercise.
// Codon	Protein
// AUG	Methionine
// UUU, UUC	Phenylalanine
// UUA, UUG	Leucine
// UCU, UCC, UCA, UCG	Serine
// UAU, UAC	Tyrosine
// UGU, UGC	Cysteine
// UGG	Tryptophan
// UAA, UAG, UGA	STOP
// Learn more about protein translation on Wikipedia
// If an invalid character or codon is encountered during translation, it should throw an error with the message Invalid codon.
// translate('AAA');
// => Error: Invalid codon

export const translate = (rna) => {
  // empty RNA has no proteins
  if (!rna) {
    return [];
  }
  // amino acid and codon definitions
  const aminoAcids = {
    "Methionine": ["AUG"],
    "Phenylalanine": ["UUU", "UUC"],
    "Leucine": ["UUA", "UUG"],
    "Serine": ["UCU", "UCC", "UCA", "UCG"],
    "Tyrosine": ["UAU", "UAC"],
    "Cysteine": ["UGU", "UGC"],
    "Tryptophan": ["UGG"],
    "Stop": ["UAA", "UAG", "UGA"],
  };
  const codons = Object.fromEntries(
    Object.entries(aminoAcids).flatMap(([protein, codons]) =>
      codons.map((codon) => [codon, protein])
    )
  );
  // translate rna string
  const translatedRna = [];
  let protein;
  for (let i = 0; i < rna.length; i = i + 3) {
    protein = codons[rna.slice(i, i + 3)];
    if (protein === "Stop") {
      break;
    }
    if (protein === undefined) {
      throw new Error("Invalid codon");
    }
    translatedRna.push(protein);
  }
  return translatedRna;
};