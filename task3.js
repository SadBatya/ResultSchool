//Решение с помощью цикла for
function getDivicorCount(number){
  let array = [];
 

  if(Number.isInteger(number) === false){
    console.log('NaN')
  }

  if(number % 2 === 0){
    for (let i = 0; i <= number; i = i + 2) {
      array.push(i)
    }
  }else if(number % 2 != 0){
    for (let i = 0; i <= number; i = i + 3) {
      array.push(i)
    }
  }
  
  return array
}
console.log(getDivicorCount(11))

