function getSumSequence(){
  //Запрашиваем у пользователя число
  let number = prompt('Введите число')

  //создаем пустой массив
  let array = [];
  
  //C помощью цикла добавляем числа от 1 до number в массив
  for (let i = 1; i <= number; i++) {
    array.push(i)
  }
  
  //Высчитываем сумму первого и последнего индекса массива
  let sumFirstAndLastIndex = array[0] + array[array.length - 1]

  //Возвращаем значени
  return alert(sumFirstAndLastIndex)
}


getSumSequence()



//Решение с помощью стрелочной функции
getSumSequence1 = () => {
   //Запрашиваем у пользователя число
   let number = prompt('Введите число')

   //создаем пустой массив
   let array = [];
   
   //C помощью цикла добавляем числа от 1 до number в массив
   for (let i = 1; i <= number; i++) {
     array.push(i)
   }
   
   //Высчитываем сумму первого и последнего индекса массива
   let sumFirstAndLastIndex = array[0] + array[array.length - 1]

   alert(sumFirstAndLastIndex)
}

getSumSequence1()