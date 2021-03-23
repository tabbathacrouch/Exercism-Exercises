// exercism --> bob
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
// Bob answers 'Sure.' if you ask him a question, such as "How are you?".
// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// Bob's conversational partner is a purist  when it comes to written communication and always follows normal rules regarding sentence punctuation in English.

export const hey = (message) => {
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
