getDateFormat = (date, separator) => {
  let newDate = new Date()
  let year = newDate.getFullYear()
  let month = newDate.getMonth() + 1
  let day = newDate.getDate()
  
  if(day < 10){
    day = '0' + day
  }else if(month < 10){
    month = '0' + month
  }

  date = day + '.' + month + '.' + year
  if(separator !== undefined){
    date = day + separator + month + separator + year
  }
  return(date)
}


console.log(getDateFormat())
console.log(getDateFormat(null, '-'))
