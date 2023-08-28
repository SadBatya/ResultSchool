const createTaskBlock = document.querySelector('.create-task-block');
const taskList = document.querySelector('.tasks-list');
const submitBtn = document.querySelector('.create-task-block__button')
const modal = document.querySelector('.modal-overlay')
const confirmBtn = document.querySelector('.delete-modal__confirm-button')
const cancelBtn = document.querySelector('.delete-modal__cancel-button')
const inputText = document.querySelector('#inputText')
let toDos = []

 // создаем стрелочную функцию, которая првоеряет валидность введeных данных
const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes('@')) {
    return false;
  }
  return true;
};

createTaskBlock.addEventListener('change', (event) => {
  const { target } = event;
  const { value } = target;
  const isValid = checkTaskNameInputOnValidation(value);
  const messageBlockFromDom = document.querySelector('.error-message-block');
  if (!isValid) {
    const newMessageBlock = document.createElement('span');
    newMessageBlock.className = 'error-message-block';
    newMessageBlock.textContent =
      'Ошибка! Текст для задачи не должен быть пустым и не должен содержать "@" ';
    createTaskBlock.append(newMessageBlock);
  } else if (isValid && messageBlockFromDom) {
    messageBlockFromDom.remove();
  }
});


createTaskBlock.addEventListener('submit', (event) => {
  //используем метод чтобы страница не перезагружалась
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  let inputValue = taskNameInput.value;

  //создаем объект,который будем пушить в массив задач
  let taskObj = {}
  if (inputValue) {
    alert(`Вы добавили задачу: ${inputValue}`);
    const divTask = document.createElement('div');
    divTask.className = 'task-item';
    divTask.dataset.taskId = Date.now();
    console.log(divTask.dataset.taskId)

    //создаем ключ значения для объекта внутри массива
    taskObj.value = inputValue
    taskObj.id = divTask.dataset.taskId

    //после создания пушим объект в массив
    toDos.push(taskObj)


    //создаем div и подставляем динамические данные 
    divTask.innerHTML = `
      <div class="task-item__main-container">
        <div class="task-item__main-content">
          <form class="checkbox-form">
            <input class="checkbox-form__checkbox" type="checkbox" id="${divTask.dataset.taskId}">
            <label for="${divTask.dataset.taskId}"></label>
          </form>
          <span class="task-item__text">${inputValue}</span>
        </div>
          <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${divTask.dataset.taskId}">
          Удалить
          </button>
    `;

    //добавляем элемент в html
    taskList.append(divTask);

    //очищаем значение в инпуте, которые мы ввели
    inputText.value = ''
    
    //создаем второе условие если поле будет пустым
  } else {
    alert(`Введите задачу`);
  }

  
});

taskList.addEventListener('click', (event) => {
  //создаем кнопку которую мы нажимаем чтобы получить доступ
  const deleteButton = event.target.closest('.delete-button')

  //получаем ближайщую заметку от это кнопки удалить
  let taskToDelete = event.target.closest('.task-item')

  //получаем айди этой кнопки
  let taskIdToDelete = taskToDelete.dataset.taskId

  //создаем условие на какую кнопку мы нажмем

  //добавляем условие, чтобы была нажата именно кнопка удалить
  if(deleteButton){
    modal.classList.remove('modal-overlay_hidden')
    modal.addEventListener('click', (event) => {
      //добавляем условие на какую кнопку будет нажатие в модальном окне
      //удалить или отмена
      if(event.target === cancelBtn){
        //усли отмена, то мы просто добавляем класс к модальному окну которое его скрывает
        modal.classList.add('modal-overlay_hidden')
      }else if(event.target === confirmBtn){
        //если же нажимаем удалить, продолжаем сценарий
        modal.classList.add('modal-overlay_hidden')

        //удаляем заметку самую ближайшую к кнопке удалить
        taskToDelete.remove()
        
        //также удаляем эту заметку из массива
        toDos.forEach(task => {
          if(task.id === taskIdToDelete){
            toDos.pop(task)
          }
        })
        
      }
    })
  }
})




