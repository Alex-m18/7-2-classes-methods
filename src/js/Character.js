/**
 * Creates new Character
 * @class
 *
 * @param {string} name Character name (2...10 symbols)
 * @param {string} type Character type (see characterTypes)
 *
 * @throws Will throw an error if the name length is wrong
 */
class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Error in Character: wrong name length');
    }

    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = 1;
    this.defence = 1;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error("Can't level up dead character");
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
}

export default Character;
