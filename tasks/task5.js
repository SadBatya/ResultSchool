const clientsEstimations = []
let goodEstimations = 0;
let notGoodEstimations = 0;

function askClientToGiveEstimation(){
  for (let i = 0; i < 5; i++) {
    const askUser = prompt('Как вы оцениваете нашу кофейню от 1 до 10?”');
    const askUserToNumber = Number(askUser)
    if(Number(askUser) === NaN || askUserToNumber >= 1 && askUserToNumber <= 10){
      clientsEstimations.push(askUserToNumber)
    }
  }
}

askClientToGiveEstimation()

const filterRaitng = clientsEstimations.filter((raiting) => {
  if(raiting >= 5){
    goodEstimations++
  }else{
    notGoodEstimations++
  }
})

alert(`Всего положительных оценок: ${goodEstimations}; 
Всего отрицательных оценок: ${notGoodEstimations}`)
