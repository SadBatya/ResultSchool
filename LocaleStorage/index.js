const myNumber = 42
const object ={
  name: 'Max',
  age: 20,

}
localStorage.setItem('person', JSON.stringify(object))
localStorage.setItem('number', myNumber)
console.log(localStorage.getItem('number'))

localStorage.removeItem('number')
