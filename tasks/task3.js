const salariesDevelopers = [400, 500, 600, 2000, 350];

//map
const updatedSalaries = salariesDevelopers.map((salary) => {
  return salary ** 2;
});

//filter

console.log('updatedSalaries', updatedSalaries);
