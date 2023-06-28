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

const taskItem2 = document.createElement('div')
taskItem2.className = 'task-item'
taskItem2.dataset.taskId = tasks[0].id

const taskItem3 = document.createElement('div')
taskItem3.className = 'task-item'
taskItem3.dataset.taskId = tasks[1].id

const taskItem4 = document.createElement('div')
taskItem4.className = 'task-item'
taskItem4.dataset.taskId = tasks[2].id






const taskItemMainContainer = document.createElement('div')
taskItemMainContainer.className = 'task-item__main-container'

const taskItemMainContainer2 = document.createElement('div')
taskItemMainContainer2.className = 'task-item__main-container'

const taskItemMainContainer3 = document.createElement('div')
taskItemMainContainer3.className = 'task-item__main-container'

const taskItemMainContainer4 = document.createElement('div')
taskItemMainContainer4.className = 'task-item__main-container'




const taskItemMainContent = document.createElement('div')
taskItemMainContent.classList = 'task-item__main-content'

const taskItemMainContent2 = document.createElement('div')
taskItemMainContent2.classList = 'task-item__main-content'

const taskItemMainContent3 = document.createElement('div')
taskItemMainContent3.classList = 'task-item__main-content'

const taskItemMainContent4 = document.createElement('div')
taskItemMainContent4.classList = 'task-item__main-content'



const form = document.createElement('form')
form.classList = 'checkbox-form'

const form2 = document.createElement('form')
form2.classList = 'checkbox-form'

const form3 = document.createElement('form')
form3.classList = 'checkbox-form'

const form4 = document.createElement('form')
form4.classList = 'checkbox-form'




const input = document.createElement('input')
input.className = 'checkbox-form__checkbox'
input.type = 'checkbox'
input.id = 'task1'

const input2 = document.createElement('input')
input2.className = 'checkbox-form__checkbox'
input2.type = 'checkbox'
input2.id = tasks[0].id

const input3 = document.createElement('input')
input3.className = 'checkbox-form__checkbox'
input3.type = 'checkbox'
input3.id = tasks[1].id

const input4 = document.createElement('input')
input4.className = 'checkbox-form__checkbox'
input4.type = 'checkbox'
input4.id = tasks[2].id


const label = document.createElement('label')
label.htmlFor = 'task-1'

const label2 = document.createElement('label')
label2.htmlFor = tasks[0].id

const label3 = document.createElement('label')
label3.htmlFor = tasks[1].id

const label4 = document.createElement('label')
label4.htmlFor = tasks[2].id






const span = document.createElement('span')
span.className = 'task-item__text'
span.innerHTML = 'Посмотреть новый урок по JavaScript'

const span2 = document.createElement('span')
span2.className = 'task-item__text'
span2.innerHTML = tasks[0].text
const span3 = document.createElement('span')
span3.className = 'task-item__text'
span3.innerHTML = tasks[1].text

const span4 = document.createElement('span')
span4.className = 'task-item__text'
span4.innerHTML = tasks[2].text





const button = document.createElement('button')
button.className = 'task-item__delete-button default-button delete-button'
button.innerHTML = 'удалить'
button.dataset.deleteTaskId = '5'

const button2 = document.createElement('button')
button2.className = 'task-item__delete-button default-button delete-button'
button2.innerHTML = 'удалить'
button2.dataset.deleteTaskId = '5'

const button3 = document.createElement('button')
button3.className = 'task-item__delete-button default-button delete-button'
button3.innerHTML = 'удалить'
button3.dataset.deleteTaskId = '5'

const button4 = document.createElement('button')
button4.className = 'task-item__delete-button default-button delete-button'
button4.innerHTML = 'удалить'
button4.dataset.deleteTaskId = '5'



taskList.prepend(taskItem)
taskItem.prepend(taskItemMainContainer)
taskItemMainContainer.prepend(taskItemMainContent)
taskItemMainContent.prepend(form)
form.prepend(input)
form.prepend(label)
taskItemMainContent.append(span)
taskItemMainContainer.append(button)

taskList.append(taskItem2)
taskItem2.prepend(taskItemMainContainer2)
taskItemMainContainer2.prepend(taskItemMainContent2)
taskItemMainContainer2.append(button2)
taskItemMainContent2.prepend(form2)
form2.prepend(input2)
form2.prepend(label2)
taskItemMainContent2.append(span2)

taskList.append(taskItem3)
taskItem3.prepend(taskItemMainContainer3)
taskItemMainContainer3.append(button3)
taskItemMainContainer3.prepend(taskItemMainContent3)
taskItemMainContent3.prepend(form3)
form3.prepend(input3)
form3.prepend(label3)
taskItemMainContent3.append(span3)

taskList.append(taskItem4)
taskItem4.prepend(taskItemMainContainer4)
taskItemMainContainer4.append(button4)
taskItemMainContainer4.prepend(taskItemMainContent4)
taskItemMainContent4.prepend(form4)
form4.prepend(input4)
form4.prepend(label4)
taskItemMainContent4.append(span4)


// function createTask(tasks){
//   const {taskName, id} = tasks;
//   const taskItem = document.createElement('.div')
//   const button = document.createElement('button')

//   taskItem.classList.add('tasks')
//   taskItem.textContent = taskName

//   button.textContent = 'remove'
//   taskItem.append(button)

//   return taskItem;
// }

// createTask()


