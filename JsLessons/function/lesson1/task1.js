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




console.log(getSumOfNumbers(10, 'even'))