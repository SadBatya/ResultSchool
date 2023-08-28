// для создания дат используется объект Date
const date = new Date()
console.log(date)


//Месяц начинаются от 0 до 11
//Где 0 - январь, а 11 - декабрь
//Дни недели тоже от 0 до 6
const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000)
console.log('newDate', newDate.getFullYear())
console.log('month', newDate.getMonth())
console.log('date', newDate.getDate())

//Для получения дня недели есть метод getDate
console.log('day', newDate.getDay())

//мы также можме изменять данные с помощью set
newDate.setFullYear(2001)
newDate.setMonth(2)
newDate.setDate(20)
console.log(newDate)

//Мы можем также считать разницу дат с помощью getTime
const date1 = new Date(2005, 4, 20)
const date2 = new Date(2006, 4, 10)

//getTime высчитывает кол-во мс с 1970 года
console.log('date1', date1.getTime())
console.log('date2', date2.getTime())

//теперь высчитываем разницу между двумя датами
const difference = date2.getTime() - date1.getTime();
console.log('difference', difference / 1000 / 60)

//Также мы можем считать время выполнения операции
const startTime = Date.now()

for(let i = 0; i < 1000000; i += 1){

}

const endTime = Date.now()

//Выводим в консоль начальное и конечное время выполнения
console.log(startTime)
console.log(endTime)

//Высчитываем разницу
const timeDif = endTime - startTime

//Выводим разницу в консоль
console.log(timeDif)