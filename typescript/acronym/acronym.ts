export const parse = (phrase: string) => {
  return phrase
    .split(" ")
    .map((x) => {
      if (x.includes("-")) {
        return x
          .split("-")
          .map((y) => y[0].toUpperCase())
          .join("");
      } else {
        const caps = x.match(/[A-Z]/g);
        if (caps?.length && !x.includes(":")) {
          return caps.join("");
        } else return x[0].toUpperCase();
      }
    })
    .join("");
};
