const footballer = {
  fullName: 'Cristiano Ronaldo',
  //исправил стрелочную фукнцию на анонимную
  attack: function () {
     console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal(sound) {
     console.log(`${this.fullName} забил гол! Вот это да!`);
     this.celebrate(sound);
  },
  celebrate(sound) {
     console.log(sound);
  },
  goToSubstitution: function(newPlayer) {
     console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
  }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

//использовал bind чтобы достучаться до значений объекта
attack.bind(footballer)();//вызвал ее сразу чтобы не создавать новые переменные

//методом call добрался до значение
score.call(footballer, 'Сиииии');

//тут повторил тоже самое, но само значение уже нужно брать в квадратные скобки
substitute.apply(footballer, ['Paulo Dibala'])