//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const patterns = {
  ' _ | ||_|   ': 0,
  '     |  |   ': 1,
  ' _  _||_    ': 2,
  ' _  _| _|   ': 3,
  '   |_|  |   ': 4,
  ' _ |_  _|   ': 5,
  ' _ |_ |_|   ': 6,
  ' _   |  |   ': 7,
  ' _ |_||_|   ': 8,
  ' _ |_| _|   ': 9,
};

function lineConvert(line) {
  let digits = line[0].map((_, k) => line.reduce((acc, v) => acc + v[k], '')).map(e => patterns[e]);
  return digits.map(v => v === undefined ? '?' : v).join('');
}

export const convert = (input) => {
  let lines = input.split('\n').map(v => v.match(/.{3}/g));
  let result = [];
  for (let i = 0; i < lines.length; i += 4) {
    result.push(lineConvert(lines.slice(i, i+4)));
  }
  return result.join(',');
};
