const createTaskBlock = document.querySelector('.create-task-block')
const checkTaskNameInputOnValidation = (value) => {
  if(!value || value.includes('@')){
    return false
  }
  return true
}

createTaskBlock.addEventListener('change', (event) => {
  const { target } = event
  const { value } = target
  const isValid = checkTaskNameInputOnValidation(value)
  const messageBlockFromDom = document.querySelector('.error-message-block')
  if(!isValid){
    const newMessageBlock = document.createElement('span')
    newMessageBlock.className = 'error-message-block'
    newMessageBlock.textContent = 'Ошибка! Текст для задачи не должен быть пустым и не должен содержать "@" '
    createTaskBlock.append(newMessageBlock)
  }else if(isValid && messageBlockFromDom){
    messageBlockFromDom.remove()
  }
})