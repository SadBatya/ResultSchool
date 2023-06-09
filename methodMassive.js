const salariesDevelopers = [400, 500, 600, 2000, 350];

//map
const updatedSalaries = salariesDevelopers.map((salary) => {
  return salary ** 2;
});

console.log('updatedSalaries', updatedSalaries);
//filter
const filterSalaries = salariesDevelopers.filter((salary) => {
  return salary % 2 === 0;
})



console.log('filterSalaries', filterSalaries);


//find

const searchedSalary = salariesDevelopers.find((salaries) => {
  return salaries > 500;
});

console.log('searchedSalary',searchedSalary)


//findIndex

const searchIndex = salariesDevelopers.findIndex((salary) =>{
  return salary === 600;
})

console.log('searchIndex', searchIndex)


//some ande every они возвращают true or false

const somdeIndex = salariesDevelopers.some((salary) =>{
  return salary === 600;
})

const somdeIndex2 = salariesDevelopers.every((salary) =>{
  return salary === 800;
})

console.log('someIndex', somdeIndex)
console.log('someIndex2', somdeIndex2)