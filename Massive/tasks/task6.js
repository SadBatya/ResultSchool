const numbers = [10, 4, 100, -5, 54, 2];
let sumNumbers = 0;

//с помощью цикла forEach
numbers.forEach((numbers) => {
  sumNumbers += numbers ** 3 
})

console.log(sumNumbers)


//с помощью цикла for of
for(let number of numbers){
  sumNumbers += number ** 3
}

console.log(sumNumbers)
  
// //с помощью цикла for
for(let i = 0; i < numbers.length; i++){
    sumNumbers += numbers[i] ** 3
  }

console.log(sumNumbers)
   
////с помощью метода reduce
const reduceSum = numbers.reduce((acc, number) =>{
    return acc + number ** 3
  },0)

console.log(reduceSum)