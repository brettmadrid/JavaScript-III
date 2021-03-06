/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(properties) {
  this.createdAt = properties.createdAt;
  this.dimensions = properties.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats) {
  GameObject.call(this, stats); 
  this.hp = stats.hp;
  this.name = stats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.faction = attributes.faction;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

// New Villian Object Inherits from Humanoid
function Villian(villianAttributes) {
    Humanoid.call(this, villianAttributes);
}

Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.mindSpell = function() {
    return `${this.name} just cast a spell on your mind causing you to lose 5 health points.`
}

// New Hero Object Inherits from Humanoid
function Hero(heroAttributes) {
  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.counterSpell = function() {
  return `${this.name} just cast a counter spell on your mind causing you to lose 7 health points.`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid -> Villian and Hero
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

console.log(mage);

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const badman = new Villian({
      createdAt: new Date(),
      dimensions: {
          length: 1,
          width: 2,
          height: 4,
      },
      hp: 15,
      name: 'Shoeface',
      faction: 'House of Evil',
      weapons: [
          'Spells',
          'Wand',
      ],
      language: 'Orcish',
  });

  const goodguy = new Hero({
      createdAt: new Date(),
      dimensions: {
          length: 2,
          width: 1,
          height: 2,
      },
      hp: 15,
      name: 'Aelforn',
      faction: 'People of the West',
      weapons: [
          'Spells',
          'Magic Sword',
      ],
      language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!

  // New Villian Object inherited from Humanoid Object
  console.log(badman)
  console.log(badman.mindSpell());
  goodguy.hp -= 5;
  console.log(goodguy.hp);
  // New Hero Object inherited from Humanoid Object
  console.log(goodguy);
  console.log(goodguy.counterSpell());
  badman.hp -= 7;
  console.log(badman.hp);
  console.log(badman.mindSpell());
  goodguy.hp -= 5;
  console.log(goodguy.hp);
  console.log(goodguy.counterSpell());
  badman.hp -= 7;
  console.log(badman.hp);
  console.log(badman.mindSpell());
  goodguy.hp -= 5;
  console.log(goodguy.hp);
  console.log(goodguy.destroy());