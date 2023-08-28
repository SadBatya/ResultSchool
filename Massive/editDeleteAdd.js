// Добавление элементов
const salariesOfDevelopers = [400, 500, 600, 2000, 350]

//Добавление элементов push and unshift
const newSeniorDeveloperSalary = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary, 2987,4242)
salariesOfDevelopers.unshift(newSeniorDeveloperSalary, 1000, 20000)


//Удаление элементов shift and pop
const firstRemoveElement = salariesOfDevelopers.shift()
const lastRemoveElement = salariesOfDevelopers.pop()

console.log(lastRemoveElement)
console.log(firstRemoveElement)


//Изменение элементов массива
salariesOfDevelopers[4] = 800




console.table(salariesOfDevelopers)