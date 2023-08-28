// Promise.all([
//   new Promise(),
//   new Promise(),
//   new Promise(),
// ])


// fetch
const URL = 'https://jsonplaceholder.typicode.com/todos'
const todosIds = [43, 10, 5, 100, 101]
const dataContainer = document.querySelector('#data-container')


const createTodoElement = (text) => {
  const todoElement = document.createElement('li')
  const todoElementAnchor = document.createElement('a')
  todoElementAnchor.href = '#'
  todoElementAnchor.textContent = text
  todoElement.append(todoElementAnchor)

  return todoElement
}

const getTodosByIds = (ids) => {
  const requests = ids.map(id => fetch(`${URL}/${id}`))
  Promise.all(requests)
    .then(responses => {
      const dataResults = responses.map(response => response.json())
      return Promise.all(dataResults)
      
    })
    .then((todos) => {
      console.log(todos)
      todos.forEach(todo => {
        const todoHTML = createTodoElement(todo.title)
        dataContainer.append(todoHTML)
      })
    })
    .catch(error => console.log(error))
}

getTodosByIds(todosIds)