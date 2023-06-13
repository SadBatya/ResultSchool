// addDays = (date, days) => {
//  let dateNow = Number(date)
//  let dateNow2 = new Date()
//  let dateNow3 = (`${dateNow2.getFullYear()} .${dateNow2.getDay()} . ${dateNow2.getMonth()}`)

//  console.log(date)
//  console.log(dateNow2)
//  console.log(dateNow3)
//  console.log(typeof dateNow)
// }

addDays = (date, days) => {
  let newDate = Date.now(new Date(date))
  let futureDate = newDate + 
  console.log(newDate)
}

addDays('05.05.2021', 1)