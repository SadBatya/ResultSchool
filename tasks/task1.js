const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

//Удаляем первых двех человек, которые получили посылку
const firstPeopleWhoReceivedPackage = peopleWaiting.shift()
const secondPeopleWhoReceivedPackage = peopleWaiting.shift()


//Выводим кто получил посылку и проверяем сколько человек осталось в очереди
console.log(`${firstPeopleWhoReceivedPackage} и ${secondPeopleWhoReceivedPackage} получили посылку`)
console.log(`В очереди ${peopleWaiting.length} человек`)

//Обед, поэтому убираем людей, которые стояли в очереди
const firstPeopleWhoDidNotReceivePackage = peopleWaiting.shift(1)
const otherPeople = peopleWaiting.splice(0).toString()

//Считаем сколько человек не получили посылку
console.log(`${firstPeopleWhoDidNotReceivePackage} и ${otherPeople} не получили посылку`)
console.log(`В очереди ${peopleWaiting.length} человек`)


//решение от ментора
const giveParcel = () => {
  const man = peopleWaiting.shift()
  console.log(man, 'got parcel')
}


const leaveQueueWithoutParcel = () => {
  const manWithoutParcel = peopleWaiting.pop()
  console.log(manWithoutParcel, 'did not parcel')
}

giveParcel()
console.log(peopleWaiting)
leaveQueueWithoutParcel()
console.log(peopleWaiting)
