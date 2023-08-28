// fetch
const URL = 'https://jsonplaceholder.typicode.com/todos'
const dataContainer = document.querySelector('#data-container')


const createTodoElement = (text) => {
  const todoElement = document.createElement('li')
  const todoElementAnchor = document.createElement('a')
  todoElementAnchor.href = '#'
  todoElementAnchor.textContent = text
  todoElement.append(todoElementAnchor)

  return todoElement
}

const toggleLoader = () => {
  const loaderHTML = document.querySelector('#loader')
  const isHidden = loaderHTML.hasAttribute('hidden')
  if(isHidden){
    loaderHTML.removeAttribute('hidden')
  }else{
    loaderHTML.setAttribute('hidden', '')
  }
}

const getAllTodos = () => {
  //GET, POST, DELETE
  toggleLoader()
  const result = fetch(URL, {
    method: 'GET',
  })
  
  result
  .then((response) => {
    if(!response.ok){
      throw new Error('Ошибка запроса')
    }else{
      return response.json()
    }
  })
  .then((todos) => {todos.forEach((todo) => {
    const todoHtml = createTodoElement(todo.title)
    dataContainer.append(todoHtml)
  })})
  .catch(err => console.log(err)) 
  .finally(() => {toggleLoader()})
}


// getAllTodos()

// fetch("https://api.github.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Ошибка запроса");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     outputTable(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     const loader = document.getElementById("loader");
//     loader.style.display = "none";
//   });



//   function outputTable(users) {
//     const table = document.createElement("table");
  
//     for (const user of users) {
//       const row = table.insertRow();
  
//       const column1 = row.insertCell();
//       column1.innerHTML = `<img class="avatar" src="${user.avatar_url}" />`;
  
//       const column2 = row.insertCell();
//       column2.innerHTML = `<a href="${user.html_url}">${user.login}</a>`;
//     }
  
//     document.body.append(table);
//   }

//   outputTable(users)

