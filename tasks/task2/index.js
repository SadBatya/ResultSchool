const form = document.querySelector('.create-task-block')
const taskList = document.querySelector('.tasks-list')
const taskText = document.querySelectorAll('task')



form.addEventListener('submit', (event) => {
  event.preventDefault()
  const { target } = event
  const taskNameInput = target.taskName
  const inputValue = taskNameInput.value


  if(inputValue){
    const divTask = document.createElement('div')
    divTask.className = 'task'
    divTask.dataset.id = Date.now()
    divTask.innerHTML = inputValue
    taskList.append(divTask)
  }else if(!inputValue){
    const span = document.createElement('span')
    span.className = 'error-message-block'
    span.innerHTML = 'Название задачи не должно быть пустым'
    
  }


})

