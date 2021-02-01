// exercism --> acronym

export const parse = (string) =>
  string
    .toUpperCase()
    .replace(/[-_]|\s/g, " ")
    .split(" ")
    .map((word) => word[0])
    .join("");
