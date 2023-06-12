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


