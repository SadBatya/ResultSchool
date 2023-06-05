// let health = prompt('Введите число параметра "здоровье" для персонажа')
const textCode = document.querySelector('.code__inner');

function toString(value){
  let str = value.toString()
  return str
}

function debug1(){
  if (health < 0 || !health) {
    debugger
    alert('Параметр "здоровье" должен быть больше нуля!')
  } else{
    debugger
    alert(`Параметр "здоровье" равен ${health}`);
  }
}

// debug1(health)





