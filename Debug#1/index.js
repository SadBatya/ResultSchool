//Задача 1
function toString(value){
  let str = value.toString()
  return str
}

function debug1(){
  if (health < 0 || !health) {
    debugger
    alert('Параметр "здоровье" должен быть больше нуля!')
  } else{
    debugger
    alert(`Параметр "здоровье" равен ${health}`);
  }
}






//Задача 2
const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log(typeof temperatureInCelsius)
//prompt возвращает строку

//используем унарный плюс для преобразования строки
if (+temperatureInCelsius === 0) {
  debugger
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (+temperatureInCelsius > 0) {
  debugger
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

//JavaScript регистрозависимый язык
const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
console.log(typeof temperatureInFahrenheit)

//неправильно указаны переменные, надо использовать $
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);






//Задача 3

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

//Если не присвоить значение переменной, Js автоматически присваивать uindefined.
console.log(totalJuniorDevelopersSalary)
                
for (let i = 0; i < numberOfJuniorDevelopers; i ++) {
   const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper*taxPercentage/100);
   totalJuniorDevelopersSalary += salaryWithTax;
}

//по сути цикл проходит без ошибок, но вот после вывода в консоль ошибка NaN - not a number
// Отсюда можно сделать вывод что есть проблема с типами данных
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);





//Задача 4

let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] ** 3;
    sum += numbers[i];
}
console.log(sum); // 1158411


// я не особо понял эту задачу, но когда локально
// объявляю переменную внутри фукнции - все начинает
// работать
// Через цикл for of
for (let num of numbers){
    let sum;
    num = num ** 3;
    sum += num;
} 
console.log(sum); // 1158411



