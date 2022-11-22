export class DnDCharacter {
  hitpoints: number = 10;
  strength: number = 10;
  dexterity: number = 10;
  constitution: number = 10;
  intelligence: number = 10;
  wisdom: number = 10;
  charisma: number = 10;

  public static generateAbilityScore(): number {
    let diceRolls = [];
    while (diceRolls.length < 4) {
      let randomValue = Math.ceil(Math.random() * Math.floor(6));
      diceRolls.push(randomValue);
    }
    diceRolls.sort().shift();
    let abilityScore = diceRolls.reduce(
      (previous, current) => previous + current,
      0
    );
    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
