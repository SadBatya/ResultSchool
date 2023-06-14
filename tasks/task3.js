const coffees = ['Latte', 'Cappuccino', 'Americano'];

// let coffeeName = prompt('Поиск по название кофе:')
let coffeeName = 'latte'

//находим индекс данного кофе к массиве
let findCoffeeIndex = coffees.findIndex((coffees) => coffeeName.toLowerCase() === coffees.toLowerCase())

//выполняем условие if else
if(findCoffeeIndex === -1){
  console.log('Такого кофе нет')
}else if(findCoffeeIndex >= 0){
  console.log(`Держите ваш любимый ${coffees[findCoffeeIndex]}. Он ${findCoffeeIndex + 1} - ой по популярности в нашей кофейне`)
}




