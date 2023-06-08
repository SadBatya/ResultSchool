//метод решение с помощью for

function getSumOfNumbers(number, type) {
  let sum = 0;
  
  if(isNaN(number) === true || number === ''){
    console.log('NaN')
  }
  
  if(type === 'odd'){
    for(let i = 0; i < number; i = i + 3){
      sum += i
    }
  }else if(type === 'even'){
    for(let i = 0; i < number; i = i + 2){
      sum += i
    }
  }else{
    for (let i = 0; i < number; i++){
     sum += i
    }
  }
  return sum
}

console.log(getSumOfNumbers(11, 'even'))

//метод решения с помощью switch


function getSumOfNumbers(number, type) {
  let sum = 0;
  
  if(isNaN(number) === true || number === ''){
    console.log('NaN')
  }

  switch (type) {
    case 'odd':
          for(let i = 0; i < number; i = i + 3){
          sum += i
          }
      break;
    case 'even':
          for(let i = 0; i < number; i = i + 2){
          sum += i
          }
      break;
    case '':
          for(let i = 0; i < number; i = i++){
          sum += i
          }
      break;
  }
  return sum
}

console.log(getSumOfNumbers(11, 'even'))