const taskList = document.querySelector('.tasks-list')
const form = document.querySelector('.create-task-block')
const errorMessage = document.querySelector('.error-message-block')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskList = document.querySelector('.tasks-list')
  const { target } = event
  const taskNameInput = target.taskName
  const inputValue = taskNameInput.value


  if(inputValue){
    const divTask = document.createElement('div')
    divTask.className = 'task'
    divTask.dataset.id = Date.now()
    divTask.innerHTML = inputValue
    taskList.append(divTask)
  }else{
    alert('Введите правильно значение!')
  }
})