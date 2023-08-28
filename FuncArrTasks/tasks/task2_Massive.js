getMatResult = (expression) => {
  if(expression.length === 3){
    let firstSymbol = Number(expression[0]) 
    console.log(typeof firstSymbol)

    let lastSymbol = Number(expression[expression.length - 1]) 
    console.log(typeof lastSymbol)

    let symbol = expression[1]
    let result = (`${firstSymbol} ${symbol} ${lastSymbol}`)
    return result
  }else(expression.length > 3){
    
  }
}

const array = ['22',33,'55']

console.log(array[0])

console.log(getMatResult(['200', '+', 300])) 