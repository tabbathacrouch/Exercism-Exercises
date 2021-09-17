// Implement the classic method for composing secret messages called a square code.
// Given an English text, output the encoded version of that text.
// First, the input is normalized: the spaces and punctuation are removed from the English text and the message is downcased.
// Then, the normalized characters are broken into rows. These rows can be regarded as forming a rectangle when printed with intervening newlines.
// For example, the sentence
// "If man was meant to stay on the ground, god would have given us roots."
// is normalized to:
// "ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots"
// The plaintext should be organized in to a rectangle. The size of the rectangle (r x c) should be decided by the length of the message, such that c >= r and c - r <= 1, where c is the number of columns and r is the number of rows.
// Our normalized text is 54 characters long, dictating a rectangle with c = 8 and r = 7:
// "ifmanwas"
// "meanttos"
// "tayonthe"
// "groundgo"
// "dwouldha"
// "vegivenu"
// "sroots  "
// The coded message is obtained by reading down the columns going left to right.
// The message above is coded as:
// "imtgdvsfearwermayoogoanouuiontnnlvtwttddesaohghnsseoau"
// Output the encoded text in chunks that fill perfect rectangles (r X c), with c chunks of r length, separated by spaces. For phrases that are n characters short of the perfect rectangle, pad each of the last n chunks with a single trailing space.
// "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau "
// Notice that were we to stack these, we could visually decode the ciphertext back in to the original message:
// "imtgdvs"
// "fearwer"
// "mayoogo"
// "anouuio"
// "ntnnlvt"
// "wttddes"
// "aohghn "
// "sseoau "

export class Crypto {
  constructor(input) {
    this.input = input;
    this.plaintext = '';
    this._ciphertext = '';
    this.rowCount = null;
    this.columnCount = null;
    this.length = null;
  }

  normalize() {
    this.plaintext = this.input.toLowerCase().replace(/[@,%!.\s]/g, '');
    this.length = this.input.replace(/[!\s]/g, '').length;
    this.factor();
  }

  factor() {
    let divisor = 2;
    let length = this.length
    while (length > 1){
      if(length % divisor === 0){
        length /= divisor;
      } else {
        divisor++;
      }
    }
    this.rowCount = divisor;
    this.columnCount = this.length / this.rowCount;
  }

  chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size);
    const chunks = new Array(numChunks);
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size).padEnd(this.columnCount, ' ');
    }
    return chunks;
  }

  get ciphertext() {
    this.normalize();
    if(this.plaintext.length < 2){
      this._ciphertext = this.plaintext;
    } else {
      const transposedText = this.chunkSubstr(this.plaintext, this.columnCount)
      let arr = [];
      for(let i = 0; i < this.columnCount; i++){
        arr.push([])
        for(let j = 0; j < transposedText.length; j++){
          arr[i].push(transposedText[j][i])
        }
      } 
     this._ciphertext = arr.map(e => e.toString().replace(/,/g, '')).toString().replace(/,/g, ' ');
    }
    return this._ciphertext;
  }
}
