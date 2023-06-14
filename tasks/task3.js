function addDays(date, days) {
  return new Date(date.getTime() + days * 86400000);  
}

//второй вариант решения
function addDays2(date, days){
  return new Date(Date.now(date) + days * 86400000)
}


console.log(addDays(new Date(), 2));
console.log(addDays2(new Date(), 2));

let a = ''
let b = 2
console.log(Boolean(a))
console.log(Boolean(b))