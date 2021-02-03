// exercism --> rotational-cipher

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
