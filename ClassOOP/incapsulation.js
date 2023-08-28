//Инкапсуляция - скрытие данных от доступа вне класса или наслежования
//Чтобы сделать его приватным используем private (#)
class Developer{
  #salary
  constructor(name, programmingLanguage){
    this.name = name,
    this.programmingLanguage = programmingLanguage
    this.#salary = 3000;
  }

  get devSalary(){
    return this.#salary
  }

  set setSalary(salary){
    this.#salary = salary
  }

  startCoding(){
    console.log(this.#salary)
    console.log(`${this.name} начинает писать код`)
  }

  #printProgrammingLanguage(){
    console.log(`Язык программирования: ${this.programmingLanguage}`)
  }
}

const developer = new Developer('Максим', 'JavaScript')
console.log(developer)



class JuniorDeveloper extends Developer{
  constructor(name, programmingLanguage){
    super(name, programmingLanguage)
  } 
}


const juniorDeveloper = new JuniorDeveloper('Игорь','JavaScript')


// Если получается получить доступ к значениям черех точку
// То такие параметры называются публичными
console.log(developer.name)

developer.startCoding()

console.log(developer.salary)
console.log(developer.devSalary)
developer.setSalary = 5000
console.log(developer.devSalary)
