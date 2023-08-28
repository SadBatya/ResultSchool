const usersURL = 'https://jsonplaceholder.typicode.com/user'
const todosURL = 'https://jsonplaceholder.typicode.com/todos'

//выполнение запроса с помощью then
fetch(usersURL)
  .then(response => response.json())
  .then(users => {
    const firstUserId = users[0]?.id
    fetch(`${todosURL}?userId=${firstUserId}`)
      .then(response => response.json())
      .then(todos => {
        console.log(todos)
      })
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error));


// а теперь способо с помощью async/await
// также используем then catch finally

try{

} catch(error){
  console.log(error)
}finally{
  console.log('finally')
}
const getTodosWithUserData = async() => {
  try { 
    const response = await fetch(usersURL)
    const users = await response.json()
    if(!response.ok){
      throw new Error('Ошибка получения данных от пользователя')
    }
    console.log(users)
    const firstUserId = users[0]?.id
    const todosResponse = await fetch(`${todosURL}?userId=${firstUserId}`)
    if(!todosResponse.ok){
      throw new Error('Ошибка получения данных о задачах')
    }
    const todos = await todosResponse.json()
    console.log(todos)
  } catch (error) {
    console.log(error)
  }finally{
    console.log('finally')
  }
}

const promise = getTodosWithUserData()
console.log(promise)