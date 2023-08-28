const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin(defenderObject) {
    let chanceArray = [0, 4];
    for (let keyAttack in attacker) {
      for (let keyDefender in defender) {
        if (attacker[keyAttack] > defender[keyDefender]) {
          chanceArray[0] += 1;
        }
      }
      return chanceArray;
    }
  },

  improveArmy() {
    (this.archer += 5),
      (this.footSoldier += 5),
      (this.cavalry += 5),
      (this.artillery += 5);
  },

  attack(defender) {
    let chance = this.checkChancesToWin();
    let result = (chance[0] / chance[1]) * 100;
    if (result < 70) {
      console.log(
        `Наши шансы равны ${chance[0]}/${chance[1]}.Необходимо укрепление!`
      );
      this.improveArmy();
    } else {
      console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
    }
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

console.log(attacker.attack(defender))// Наши шансы равны 1/4. Необходимо укрепление! 
console.log(attacker.attack(defender))// Наши шансы равны 2/4. Необходимо укрепление! 
console.log(attacker.attack(defender))// Наши шансы равны 2/4. Необходимо укрепление! 
console.log(attacker.attack(defender))// Мы усилились! Мы несомненно победим! Наши шансы высоки!
