const ordersArr = [4, 2, 1, 3];

const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];


const result = []

people.forEach((name, peopleIndex) => {
  ordersArr.forEach((value, Ordersindex) => {
    if(peopleIndex === Ordersindex){
      name.peopleIndex = value;
      result.push(people)
      
    }
  })
})





console.log(result)


