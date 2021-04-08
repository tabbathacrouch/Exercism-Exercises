// exercism --> atbash cipher
// Create an implementation of the atbash cipher, an ancient encryption system created in the Middle East.
// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
// An Atbash cipher for the Latin alphabet would be as follows:
// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
// Ciphertext is written out in groups of fixed length, the traditional group size being 5 letters, and punctuation is excluded. This is to make it harder to guess things based on word boundaries.

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
function formatMessage(message) {
  return message.toLowerCase().replace(/[,.\s]/g, "");
}

export const encode = (message) => {
  const formattedMessage = formatMessage(message);
  let encodedMessage = "";
  for (let i = 0; i < formattedMessage.length; i++) {
    if (/[0-9]/.test(formattedMessage[i])) {
      encodedMessage += formattedMessage[i];
    } else {
      const numericValue = alphabet.indexOf(formattedMessage[i]) - 25;
      encodedMessage += alphabet[Math.abs(numericValue)];
    }
  }
  return encodedMessage.replace(/(.{5})/g, "$1 ").trim();
};

export const decode = (message) => {
  const formattedMessage = formatMessage(message);
  let decodedMessage = "";
  for (let i = 0; i < formattedMessage.length; i++) {
    if (/[0-9]/.test(formattedMessage[i])) {
      decodedMessage += formattedMessage[i];
    } else {
      const numericValue = alphabet.indexOf(formattedMessage[i]) - 25;
      decodedMessage += alphabet[Math.abs(numericValue)];
    }
  }
  return decodedMessage;
};
