// exercism --> variable length quantity
// Implement variable length quantity encoding and decoding.
// The goal of this exercise is to implement VLQ encoding/decoding.
// In short, the goal of this encoding is to encode integer values in a way that would save bytes. Only the first 7 bits of each byte is significant (right-justified; sort of like an ASCII byte). So, if you have a 32-bit value, you have to unpack it into a series of 7-bit bytes. Of course, you will have a variable number of bytes depending upon your integer.
// To indicate which is the last byte of the series, you leave bit #7 clear. In all of the preceding bytes, you set bit #7.
// So, if an integer is between 0-127, it can be represented as one byte. Although VLQ can deal with numbers of arbitrary sizes, for this exercise we will restrict ourselves to only numbers that fit in a 32-bit unsigned integer. Here are examples of integers as 32-bit values, and the variable length quantities that they translate to:
//  NUMBER        VARIABLE QUANTITY
// 00000000              00
// 00000040              40
// 0000007F              7F
// 00000080             81 00
// 00002000             C0 00
// 00003FFF             FF 7F
// 00004000           81 80 00
// 00100000           C0 80 00
// 001FFFFF           FF FF 7F
// 00200000          81 80 80 00
// 08000000          C0 80 80 00
// 0FFFFFFF          FF FF FF 7F

export const encode = (integer) => {
  const result = [];
  for (let remaining of integer) {
    const set = [];
    while (remaining > 0) {
      set.unshift((remaining & 0x7f) | 0x80);
      remaining >>>= 7;
    }
    if (set.length === 0) {
      set.push(0);
    } else {
      set[set.length - 1] &= 0x7f;
    }
    result.push(...set);
  }
  return result;
};

export const decode = (bytes) => {
  const result = [];
  let value = 0;
  let processed = 0;
  for (const b of bytes) {
    value = (value << 7) | (b & 0x7f);
    processed += 1;
    if (!((b & 0x80) > 0)) {
      result.push(value >>> 0);
      value = 0;
      processed = 0;
    }
  }
  if (processed !== 0) {
    throw new Error("Incomplete sequence");
  }
  return result;
};
