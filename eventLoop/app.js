const URL = 'https://jsonplaceholder.typicode.com/todos/1'

const getTodo = (callback) => {
  fetch(URL)
    .then(response => response.json())
    .then(todo => {
      console.log(todo)
      callback(todo)
    })
    .catch(error => console.log(error))
}

getTodo((todoItem) => {
  console.log(todoItem)
})

