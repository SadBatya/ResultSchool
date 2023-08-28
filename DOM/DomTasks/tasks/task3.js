function getKiller(suspectInfo, deadPeople) {
  for (let key of Object.keys(suspectInfo)) {
      if (deadPeople.every(e => suspectInfo[key].includes(e)))
          return key;
  }
}


console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"]
    },
    ["Lucas", "Bill"]
  )
); // Убийца James