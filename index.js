const developer = {
  name:'Maxim',
  job: 'Front-End разработчик',
  experience: 24,
  jobAllinfo:{
    type: 'Frontend',
    framework: 'ReactJS',
  }
}

console.log('developer', developer)

//1 способ через точку .
console.log('name', developer.name)
console.log('jobAllInfo', developer.jobAllinfo)

//2 способ через квадратные скобки []
const key = 'name';
console.log('name', developer[key])

//Как достать значение ключа 2 уровня
console.log('type', developer.jobAllinfo.type)
console.log('type', developer['jobAllinfo']['framework'])

//как добавлять или удалять элементы из объекта
const student = {
  id: 1,
  programmingLanguage:'JavaScript',
  hasExperienceInReact: false,
}

//добавление элемента
student.experience = 6,

console.table(student)

//Удаление элемента
delete student.hasExperienceInReact;
console.table(student)

//Изменение
student.experience = 12;
student.id = 2;
console.table(student)


//итерация объектов

const goodInfo = {
  id: 1,
  price: 80,
  currency: '$',
  name: 'shoes',
}

console.log('goodinfo', goodInfo)

//можно перебирать объекты с помощью данного цикла, но это устаревший метод
for(const key in goodInfo){
  console.log('key', key)
}

//Object.keys выдает ключи
const keys = Object.keys(goodInfo)
console.log('keys', keys)

//Object.value выдает значения
const values = Object.keys(goodInfo)
console.log('value', values)

//Object.entries
const entries = Object.entries(goodInfo)
console.log('entries', entries)

//Работа с ключами объекта
const id = Symbol('id')
const user = {
  name: 'Vladimir',
  [id]: 1,
}
console.log(user)
//symbol - это способ создавать уникальные символы

//in проверить наличие ключа в объекте
console.log('name' in user)

//для вывода уникального ключа
console.log(id in user)

//как объединять несколько объектов в один
const developerInfo = {
  age: 25,
  experience: 3,
}

const developerExperienceInfo = {
  height: 180,
  isJunior: false,
}

//можно использовать spread оператор ...
const developerNew = {
  ...developerInfo
}

console.log(developerNew)

//также можно использовать Object.assign

const developer2 = Object.assign(developerInfo, developerNew)

//Опциональная цепочка ?.

//Обозначим новый объект 
const bestDeveloper = {
  name:'Vladimir',
  age: 25,
  job:{
    type:'Frontend',
    framework:'ReactJS'
  }
}

if(bestDeveloper?.job?.framework){
  console.log('Developer know frame')
}else{
  console.log('Developer don`t know frame')
}

