getDaysBeforeBirthday = (nextBirthdayDate) => {
  let date = new Date()
  let dateBirth = new Date(2024, 0, 17, 00, 00, 00)
  let differenceDate = dateBirth - date
  let differenceHour = Math.round(differenceDate/3600000)
  let differenceDay = Math.round(differenceHour/24)

  
  console.log(`До начала дня рождения осталось ${differenceHour} часов`)
  console.log(`До начала дня рождения осталось ${differenceDay} дней`)
}

getDaysBeforeBirthday()