// Promise.race([
//   new Promise(),
//   new Promise(),
//   new Promise(),
// ])


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1')
  }, 500)
})

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 2')
  }, 1000)
})


const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 3')
  }, 800)
})

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result)
  })
  .catch(error => console.log(error))

