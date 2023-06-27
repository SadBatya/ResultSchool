const tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
];

const taskList = document.querySelector('.tasks-list')
const taskItem = document.createElement('div')
taskItem.className = 'task-item'
taskItem.dataset.taskId = '1'

const taskItemMainContainer = document.createElement('div')
taskItemMainContainer.className = 'task-item__main-container'

const taskItemMainContent = document.createElement('div')
taskItemMainContent.classList = 'task-item__main-content'

const form = document.createElement('form')
form.classList = 'checkbox-form'

const input = document.createElement('input')
input.className = 'checkbox-form__checkbox'
input.type = 'checkbox'
input.id = 'task-1'

const label = document.createElement('label')
label.htmlFor = 'task-1'

const span = document.createElement('span')
span.className = 'task-item__text'
span.innerHTML = 'Посмотреть новый урок по JavaScript'

const button = document.createElement('button')
button.className = 'task-item__delete-button default-button delete-button"'
button.dataset.deleteTaskId = '5'

taskList.prepend(taskItem)
taskItem.prepend(taskItemMainContainer)
taskItemMainContainer.prepend(taskItemMainContent)
taskItemMainContent.prepend(form)
form.prepend(input)
form.prepend(label)
taskItemMainContent.append(span)
taskItemMainContainer.append(button)

