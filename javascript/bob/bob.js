// exercism --> bob

export const hey = (message) => {
  if (message === message.toUpperCase() && message.includes("?")) {
    return "Calm down, I know what I'm doing!";
  } else if (message === message.toUpperCase()) {
    return "Whoa, chill out!";
  } else if (message.includes("?")) {
    return "Sure.";
  } else if (message.includes(".") || message.includes("!")) {
    return "Whatever.";
  }
  const regex = /[0-9]/g;
  const found = message.match(regex);
  console.log("this ran", found);
};
