const arr = []

for (let i = 1016; i <= 1937; i++) {
  if(i % 3 === 0 && i % 7 === 0 && i % 5 !== 0 && i % 2 !== 0){
    arr.push(i)
  }
}

const maxNum = arr.sort((a, b) => b - a)[0]
console.log(maxNum)