const URL = 'https://jsonplaceholder.typicode.com/users'
const ids = [5, 6, 2, 1]
const dataContainer = document.querySelector('#data-container')


const createUserElement = (text) => {
  const todoElement = document.createElement('li')
  const todoElementAnchor = document.createElement('a')
  todoElementAnchor.href = '#'
  todoElementAnchor.textContent = text
  todoElement.append(todoElementAnchor)

  return todoElement
}


function getUsersByIds(ids){
  const request = ids.map(id => fetch(`${URL}/${id}`))
  Promise.all(request)
    .then(responses => {
      const dataResults = responses.map(response => response.json())
      return Promise.all(dataResults)
    })
    .then((users) => {
      users.forEach(user => {
        const todoHTML = createUserElement(user.name)
        dataContainer.append(todoHTML)
      })
    })
    .catch(error => console.log(error))
}

getUsersByIds(ids)