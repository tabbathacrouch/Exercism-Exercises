export class Anagram {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  public matches(...potentials: string[]): string[] {
    return [...potentials].filter(
      (x) =>
        x.toLowerCase().split("").sort().join("") ===
          this.input.toLowerCase().split("").sort().join("") &&
        x.toLocaleLowerCase() !== this.input.toLowerCase()
    );
  }
}
