const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
     return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
     return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic){
  let newObj = {
    name: this.name,
    type: this.type,
    makeSound(){
      this.makeSound
    },
  }
  newObj.isDomestic = isDomestic
  console.log(newObj)
  return console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
}

makeDomestic.bind(dog, true)()
makeDomestic.call(bird, false)
makeDomestic.apply(bird, ['false'])