export const hey = (message: string): string => {
  const hasUpperCaseLetters = /[A-Z]/.test(message);
  const withoutSpaces = message.replace(/\s/g, "");
  const endPunctuation = withoutSpaces.split("").pop();
  const withoutNumbers = withoutSpaces.replaceAll(/[0-9,]/g, "");
  const hasTabs = /\t/.test(message);
  if (
    endPunctuation === "?" &&
    message.toUpperCase() === message &&
    hasUpperCaseLetters
  ) {
    return "Calm down, I know what I'm doing!";
  } else if (endPunctuation === "?") {
    return "Sure.";
  } else if (
    withoutNumbers.toUpperCase() === withoutNumbers &&
    hasUpperCaseLetters
  ) {
    return "Whoa, chill out!";
  } else if (hasTabs || withoutSpaces.length === 0) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};
