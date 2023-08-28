//Деструктуризация массивов
function calcvalues(a, b) {
  return [a + b, a - b, a * b, a / b];
}
const [sum, , mult, ...other] = calcvalues(42, 10);
console.log(sum, mult, other);

//Деструктуризация объектов
const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Russia',
    city: 'Moscow',
  },
};

const {
  name: firstName = 'Без имени', 
  age, 
  car,
  address: {city: homeTown, country}
} = person;

const {name, ...info} = person

console.log(name, info)

function logPerson({name, age}){
  console.log(name + ' ' + age)
}

logPerson(person)
