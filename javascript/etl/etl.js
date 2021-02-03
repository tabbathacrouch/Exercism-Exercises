// exercism --> ETL

export const transform = (obj) => {
  const output = {};
  for (let score in obj) {
    for (let letter of obj[score]){
      output[letter.toLowerCase()] = Number(score);
    }
    // alternative to the 'for of' loop above
    // obj[score].forEach((s) => (output[s.toLowerCase()] = parseInt(score)));
  }
  return output;
};
