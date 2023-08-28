const a = [3, 4, 5]
localStorage.setItem('a', a)
const b = localStorage.getItem('a')
console.log(b)
console.log(b[0])