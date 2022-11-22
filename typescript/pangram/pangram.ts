export function isPangram(sentence: string): boolean {
  const sanitizedSentence = new Set(
    sentence
      .toLowerCase()
      .replace(/[\s+_0-9\."]/g, "")
      .split("")
  );
  return sanitizedSentence.size === 26 ? true : false;
}
