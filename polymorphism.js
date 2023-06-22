//Полиморфищм - это одно действие и несколько реализаций

class Animal{
  constructor(name){
  this.name = name
  }

  makeSound(){}
}

class Dog extends Animal {
  constructor(name){
    super(name)
  }

  makeSound(){
    console.log('гав-гав')
  }
}

class Horse extends Animal {
  constructor(name){
    super(name)
  }

  makeSound(){
    console.log('Иго-го-го')
  }
}

const subo = new Dog
console.log(subo.makeSound())



