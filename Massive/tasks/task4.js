const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2]

//делаем запрос на кофе пользователя
let coffeeName = 'latte';

//изменяем цены 
const updatePrices = prices.map((prices) => {
  return prices * 0.5
})

//находим индекс элемента
let findCoffeeIndex = coffees.findIndex((coffees) => coffeeName.toLowerCase() === coffees.toLowerCase())


// сначала получилось с помощью цикла for
for (let i = 0; i < coffees.length; i++) {
  if(coffees.length === prices.length){
    console.log(`${coffees[i]} ${updatePrices[i]}`)
  }
}

// и вроде как получилось сделать с помощью forEach
const newPrices = coffees.forEach((name,index) => {
  if(coffees.length === updatePrices.length){
    return console.log(`${coffees[index]} ${updatePrices[index]}`)
  }
})



