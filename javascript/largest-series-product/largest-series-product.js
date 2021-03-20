// exercism --> largest series product
// Given a string of digits, calculate the largest product for a contiguous substring of digits of length n.
// For example, for the input '1027839564', the largest product for a series of 3 digits is 270 (9 * 5 * 6), and the largest product for a series of 5 digits is 7560 (7 * 8 * 3 * 9 * 5).
// Note that these series are only required to occupy adjacent positions in the input; the digits need not be numerically consecutive.
// For the input '73167176531330624919225119674426574742355349194934', the largest product for a series of 6 digits is 23520.

export const largestProduct = (series, span) => {
  if (span === 0) {
    return 1;
  }
  if (series.length < span) {
    throw new Error("Span must be smaller than string length");
  }
  if (series.match(/[a-z]/g)) {
    throw new Error("Digits input must only contain digits");
  }
  if (span < 0) {
    throw new Error("Span must be greater than zero");
  }
  const subseriesArray = [];
  for (let i = 0; i < series.length - 1; i++) {
    const subseries = series.substring(i, i + span);
    if (subseries.length === span) {
      subseriesArray.push(subseries);
    }
  }
  return Math.max(
    ...subseriesArray.map((subseries) =>
      subseries.split("").reduce((acc, curr) => acc * curr, 1)
    )
  );
};

// -----1st attempt-----(did not pass test: 'can get the largest product of a big number')
// export const largestProduct = (series, span) => {
//   if (span === 0) {
//     return 1;
//   }
//   if (series.length < span) {
//     throw new Error("Span must be smaller than string length");
//   }
//   if (series.match(/[a-z]/g)) {
//     throw new Error("Digits input must only contain digits");
//   }
//   if (span < 0) {
//     throw new Error("Span must be greater than zero");
//   }
//   let product = [];
//   let numSeries = series.split("").map((x) => parseInt(x));

//   if (series.length === span) {
//     product.push(numSeries.reduce((i, curr) => i * curr));
//     return product
//       .slice(0, series.length - 1)
//       .sort()
//       .pop();
//   } else {
//     let collectionOfSeries = numSeries
//       .map((index) => numSeries.slice(index, index + span))
//       .filter((x) => x.length === span);
//     for (let i = 0; i < collectionOfSeries.length; i++) {
//       product.push(collectionOfSeries[i].reduce((acc, curr) => acc * curr, 1));
//     }

//     return product.reduce((prev, curr) => (prev > curr ? prev : curr));
//   }
// };
