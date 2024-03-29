const dataContainer = document.querySelector('#data-container')
const result = fetch('https://jsonplaceholder.typicode.com/users')
result
  .then(response => {
    if(!response.ok){
      console.error('Ошибка запроса')
    }else{
      return response.json()
    }
  })
  .then((obj) => {obj.forEach((value) => {
    const todoHtml = createElementName(value.name)
    dataContainer.append(todoHtml)
  })})


function createElementName(name){
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = '#'
  a.textContent = name
  li.append(a)

  return li
}


  
