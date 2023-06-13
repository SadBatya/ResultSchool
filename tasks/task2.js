const ordersArr = [4, 2, 1, 3];

const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];



function giveTalonsInOrder(people, ordersArr){
  const obj = {}
  people.forEach((e, i) => obj[e.id] = i)
  return ordersArr.map(id => people[obj[id]])
}



console.log(giveTalonsInOrder(people, ordersArr)) 



