const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0
  }
  // more items...
};

let globalPrice = Object.values(groceries).forEach((name) => {
  return name.price
})

console.log(globalPrice)



// console.log(globalPrice)
// let globalDiscount = Object.values(groceries).forEach((name) => {
//   name.discount
// })





// let b = Object.values(a)
// b.forEach((name) => {
//   console.log(name.price)
//   console.log(name.discount)
// })

// getTotalPriceOfShoppingBag = (shoppingBag) => {

// }


// getTotalPriceOfShoppingBag = (shoppingBag) => {
//   shoppingBag.forEach((value) => {
//     if(value.productId === groceries.productId){
//       console.log(1)
//     }
//   })
// }


// getTotalPriceOfShoppingBag = (shoppingBag) => {
//   let sum = 0;
//   shoppingBag.forEach((obj) => {
//     for(let key in groceries){
//       let id = key.productId
//       if(obj.productId === key){
//         console.log(groceries[id])
//       }
//     }
//   })
// }

// getTotalPriceOfShoppingBag(shoppingBag)
