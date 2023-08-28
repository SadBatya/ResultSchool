showSuccessMessage = (message) => {
  console.log(message)
}

showErrorMessage = (message) => {
  console.error(message)
}

checkTextOnErrorSymbol = (text, errorSymbol, succesCallback, errorCallBack) => {
  const lowText = text.toLowerCase().split('')
  const lowSymbol = errorSymbol.toLowerCase()

  lowText.forEach((value, index) => {
    if(value === lowSymbol){
      errorCallBack(`Найден запрещенный символ ${value} под индексом ${index}`)
    }
  })
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);