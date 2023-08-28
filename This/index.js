//this - object

const user = {
  name: 'Maksim',
  dateOfBirth: 2001,
  getName(){
    // return user.name;
    return this.name
  },
  calculateAge(){
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth
  },
  getAllInfo: function(){
    const age = this.calculateAge();
    console.log(`Имя: ${this.name}, Возраст:${age}`)
  }
}

console.log(user.getName())
console.log(user.calculateAge())
user.getAllInfo()

//bind call apply
const user2 = {
  name: 'Igor'
}

const user2Name = user.getName.call(user2);
console.log(user2Name);


const mainHero = {
  fullName: 'Spiderman',
  health: 65,
  strength: 5,
}

const badHero = {
  fullName: 'Joker',
  health: 55,
  strength: 10,

}

function printHeroInfo(extraInfo = ''){
  console.log(`Name: ${this.fullName}, Health: ${this.health}, Power: ${this.strength}, ${extraInfo}`)
}

printHeroInfo.call(badHero, 'Роль: Злодей');
printHeroInfo.apply(badHero, ['Роль: Злодей'])
printHeroInfo.bind(mainHero, 'Роль: Человек паук')()


//Потеря контекста this
const userMuser = {
  name: 'Vladimir',
  programmingLanguage: 'JavaScript',
  getName(){
    return this.name;
  },
  
  // у стрелочной функции нет своего this
  getProgrammingLanguage: function(){
    return this.programmingLanguage
  }
}


console.log(userMuser.getName())

const newGetName = userMuser.getName

console.log(newGetName.call(userMuser)) // он теряет контекст так как ссылается на глобальный объект window

//Второй случай потери контекста
console.log(userMuser.getProgrammingLanguage())
