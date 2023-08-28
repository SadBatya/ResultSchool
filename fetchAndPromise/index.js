// const numberOfElements = 50

// console.log('start')

// for (let i = 0; i < numberOfElements; i++) {
//   console.log('i', i)
// }

// console.log('end')


// setTimeout(() => {
//   console.log('hello')
// }, 2000)

// console.log(developer)

// setInterval(() => {
//   console.log('hello')
// }, 2000)



const developer = {
  name: 'Vladimir',
  isJSDev: true,
}

const promise = new Promise((resolve, reject) => {
  if (developer.isJSDev) {
    setTimeout(() => {
      resolve(`${developer.name} является JS - разработчиком.`)
    }, 3000)
  } else {
    reject(`${developer.name} не является JS - разработчиком.`);
  }
})

console.log(promise)

// then, catch, finally

promise
.then((succesMessage) => {
  console.log(succesMessage)
})
.catch(err => console.log(err))
.finally(() => {
  console.log('finish')
})