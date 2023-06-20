//ебучее ООП которое я не могу понять
// Попытка 5

function Animal(name){
  this.name = name;
  this.getName = function(){
    return this.name
  }
}
//для создания объекта, нам нужно использовать ключевое слово New
const cat = new Animal('КОТ')
console.log(cat)
console.log(cat.name)
console.log(cat.getName())

//Давайте рассмотрим Class

class Animal2{
  constructor(name){
    this.name = name;
  }
  getName(){
    return this.name
  }
}

const dog = new Animal2('Собака')
console.log(dog.name)