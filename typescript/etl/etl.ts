export function transform(old: { [key: string]: string[] }): {
  [key: string]: number;
} {
  const transformed = {};
  for (const [key, values] of Object.entries(old)) {
    values.forEach((letter) => {
      Object.assign(transformed, { [letter.toLowerCase()]: Number(key) });
    });
  }
  return transformed;
}
