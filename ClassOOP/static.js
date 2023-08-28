//Статические методы

class Car{
  static isCar(car){
    return car instanceof Car
  }

  static initialParams = {
    name:'Audi',
    maxSpeed: 150,
  }

  constructor(name, maxSpeed){
    this.name = name || Car.initialParams.name
    this.speed = maxSpeed || Car.initialParams.maxSpeed
  }
  drive(){
    console.log(`Машина ${this.name} сейчас в пути`)
  }
}

const car = new Car('BMW', 200)
console.log(car)


const car2 = new Car()
console.log(car2)