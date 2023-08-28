const createTaskBlock = document.querySelector('.create-task-block');
const taskList = document.querySelector('.tasks-list');
const submitBtn = document.querySelector('.create-task-block__button');
const modal = document.querySelector('.modal-overlay');
const confirmBtn = document.querySelector('.delete-modal__confirm-button');
const cancelBtn = document.querySelector('.delete-modal__cancel-button');
const inputText = document.querySelector('#inputText');
const body = document.querySelector('body');
const newMessageBlock = document.createElement('span');
const taskItems = document.querySelectorAll('.task-item');

let toDos = [];

// создаем стрелочную функцию, которая првоеряет валидность введeных данных
const checkTaskNameInputOnValidation = (value) => {
  if (!value || value.includes('@')) {
    return false;
  }
  return true;
};

function createErrorMessageBlock() {
  newMessageBlock.style.display = 'none';
  newMessageBlock.className = 'error-message-block';
  newMessageBlock.textContent =
    'Ошибка! Текст для задачи не должен быть пустым и не должен содержать "@" ';
  createTaskBlock.append(newMessageBlock);
}

createTaskBlock.addEventListener('submit', (event) => {
  //используем метод чтобы страница не перезагружалась
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  let inputValue = taskNameInput.value;
  const isValid = checkTaskNameInputOnValidation(inputValue);

  //функция для создания строки с ошибкой
  createErrorMessageBlock();

  //создаем объект,который будем пушить в массив задач
  let taskObj = {};

  if (isValid) {
    alert(`Вы добавили задачу: ${inputValue}`);
    const divTask = document.createElement('div');
    divTask.className = 'task-item';
    divTask.dataset.taskId = Date.now();
    //создаем ключ значения для объекта внутри массива
    taskObj.value = inputValue;
    taskObj.id = divTask.dataset.taskId;

    //после создания пушим объект в массив
    toDos.push(taskObj);

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
    inputText.value = '';
    //создаем второе условие если поле будет пустым
  } else if (!isValid) {
    //если поле невалидное, меняем стиль строки с ошибкой
    newMessageBlock.style.display = 'block';
  }
});

let taskToDelete = '';

taskList.addEventListener('click', (event) => {
  const taskItem = event.target.closest('.task-item');
  taskToDelete = taskItem;
  if (
    event.target.className ===
    'task-item__delete-button default-button delete-button'
  ) {
    modal.classList.remove('modal-overlay_hidden');
  }
});

modal.addEventListener('click', (event) => {
  if (
    event.target.className ===
    'delete-modal__button delete-modal__cancel-button'
  ) {
    modal.classList.add('modal-overlay_hidden');
  } else if (
    event.target.className ===
    'delete-modal__button delete-modal__confirm-button'
  ) {
    modal.classList.add('modal-overlay_hidden');
    taskToDelete.remove();
  }
});

// функция смены темы на темную-светлую
let nightMode = false;
function switchMode() {
  document.addEventListener('keydown', (event) => {
    const tasks = document.querySelectorAll('.task-item');
    const buttons = document.querySelectorAll('button');
    if (event.key === 'Tab') {
      if (!nightMode) {
        body.style.backgroundColor = '#24292E';
        tasks.forEach((task) => {
          task.style.color = '#ffffff';
        });
        buttons.forEach((button) => {
          button.style.border = '1px solid #ffffff';
        });
        nightMode = true;
      } else if (nightMode) {
        body.style.backgroundColor = '';
        tasks.forEach((task) => {
          task.style.color = '';
        });
        buttons.forEach((button) => {
          button.style.border = '';
        });
        nightMode = false;
      }
    }
  });
}

switchMode();
