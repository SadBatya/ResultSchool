// 1. Наследование(Inheritance) - создание дочерних классов на основе базовых 

class Plane{
  constructor(type, numberOfPassengers){
    this.type = type;
    this.numberOfPassengers = numberOfPassengers
  }

  startFlight(){
    console.log('Полетели!')
  }
}

//Создаем дочерний элемент на основе родительского класса
class MilitaryPlane extends Plane{
  constructor(type){
    super(type, 0)
    this.numberOfGuns = 0;
  }
  startFlight(){
    console.log('Полетели в Атаку!')
  }

  setNumberOfGuns(numberOfGuns){
    this.numberOfGuns = numberOfGuns
  }

  shoot(){
    console.log('СТРЕЛЯЕМ!!!')
  }
}

const militaryPlane = new MilitaryPlane('military')
console.log(militaryPlane)
militaryPlane.startFlight()// Полетели в Атаку!
militaryPlane.setNumberOfGuns(4)// 4
militaryPlane.shoot()// СТРЕЛЯЕМ!!!


//Также можно использовать ключевое слово instanceof
//Оно проверяет принадлежит ли объект к какому то определенному классу

console.log(militaryPlane instanceof MilitaryPlane)// True

//Создадим класс к которому не принадлежит данный объект
class Dog{}
console.log(militaryPlane instanceof Dog)// False


// const plane = new Plane('Пассажирский', 100)


// console.log(plane)
// plane.startFlight()
// plane.setNumberOfGuns()



