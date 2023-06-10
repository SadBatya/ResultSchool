const salariesDevelopers = [400, 500, 600, 2000, 350];

//map
const updatedSalaries = salariesDevelopers.map((salary) => {
  return salary ** 2;
});

console.log('updatedSalaries', updatedSalaries);
//filter
const filterSalaries = salariesDevelopers.filter((salary) => {
  return salary % 2 === 0;
})



console.log('filterSalaries', filterSalaries);


//find

const searchedSalary = salariesDevelopers.find((salaries) => {
  return salaries > 500;
});

console.log('searchedSalary',searchedSalary)


//findIndex

const searchIndex = salariesDevelopers.findIndex((salary) =>{
  return salary === 600;
})

console.log('searchIndex', searchIndex)


//some ande every они возвращают true or false

const somdeIndex = salariesDevelopers.some((salary) =>{
  return salary === 600;
})

const somdeIndex2 = salariesDevelopers.every((salary) =>{
  return salary === 800;
})

console.log('someIndex', somdeIndex)
console.log('someIndex2', somdeIndex2)

//reduce

const sum = salariesDevelopers.reduce((acc, salary, index, array) => {
  console.log('acc', acc, salary)
  return acc + salary;
}, 0)

console.log(sum)

//splice

const cars = ['BMW', 'Mercedes','Lada'];

//splice изменяет текущий массив
cars.splice(0, 2, 'Audi', 'Bugati')
console.log(cars)

//slice не изменяет массив и создает новый
const agesOfDevelopers = [25, 18, 45, 30]
console.log(agesOfDevelopers.slice(0,2))
console.log(agesOfDevelopers)

//indexOf

const favoriteFood = ['Мороженое','Торт','Кофе']
const indexOfFood = favoriteFood.indexOf('торт');
console.log(indexOfFood)

//includes

const technologue = ['JavaScript', 'HTML', 'CSS']
const technologueExist = technologue.includes('CSS')
console.log(technologueExist)

//split and join

const listOfOrders = 'Майка, шорты, кроссовки, рюкзак'
const listOfOrdersArray = listOfOrders.split(', ' )
console.log(listOfOrdersArray)

//возвращаем обратно в строчку с помощью join
const ordersString = listOfOrdersArray.join(', ')
console.log(ordersString)

//reverse разворачивает наш массив
technologue.reverse()
console.log(technologue) 

//Обединение массивов в один массив

const currentDevelopers = ['Maxim', 'Oleg']
const newDevelopers = ['Anton', 'Gleb']

//для обхединения массмвов есть метод concat

const allDevelopers = currentDevelopers.concat(newDevelopers)
console.log(allDevelopers)

//Второй способ можно использовать spread оператор

const allDeveloper = [
  ...currentDevelopers,
  ...newDevelopers,
]

console.log(allDeveloper)
