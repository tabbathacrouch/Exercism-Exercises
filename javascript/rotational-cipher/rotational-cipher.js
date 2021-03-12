// exercism --> rotational-cipher
// Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.
// The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an integer key between 0 and 26. 
// Using a key of 0 or 26 will always yield the same output due to modular arithmetic. The letter is shifted for as many values as the value of the key.
// The general notation for rotational ciphers is ROT + <key>. The most commonly used rotational cipher is ROT13.
// A ROT13 on the Latin alphabet would be as follows:
// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: nopqrstuvwxyzabcdefghijklm
// It is stronger than the Atbash cipher because it has 27 possible keys, and 25 usable keys.
// Ciphertext is written out in the same formatting as the input including spaces and punctuation.

export class RotationalCipher {
  static rotate(string, shiftKey) {
    if (shiftKey === 0) {
      return string;
    }
    let cipherString = "";
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char.match(/[a-z]/i)) {
        let charCode = string.charCodeAt(i);
        // uppercase letters
        if (charCode >= 65 && charCode <= 90) {
          char = String.fromCharCode(((charCode - 65 + shiftKey) % 26) + 65);
        }
        // lowercase letters
        else if (charCode >= 97 && charCode <= 122) {
          char = String.fromCharCode(((charCode - 97 + shiftKey) % 26) + 97);
        }
      }
      cipherString += char;
    }
    return cipherString;
  }
}
