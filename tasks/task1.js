checkQuestionAnswer = (question, correctAnswer) =>{
  let question1 = prompt(question)
  if(question1.toLowerCase() === correctAnswer.toLowerCase()){
    alert('Вы правы!')
  }else{
    alert('Вы неправы!')
  }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');