const createTaskBlock = document.querySelector('.create-task-block');
const taskList = document.querySelector('.tasks-list');
const submitBtn = document.querySelector('.create-task-block__button')

console.log(taskList);
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
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const inputValue = taskNameInput.value;
  if (inputValue) {
    alert(`Вы добавили задачу: ${inputValue}`);
    const divTask = document.createElement('div');
    divTask.className = 'task-item';
    divTask.dataset.taskId = Date.now();
    divTask.innerHTML = `
    <div class="task-item" data-task-id="${divTask.dataset.id}">
      <div class="task-item__main-container">
        <div class="task-item__main-content">
          <form class="checkbox-form">
            <input class="checkbox-form__checkbox" type="checkbox" id="${divTask.dataset.id}">
            <label for="${divTask.dataset.id}"></label>
          </form>
          <span class="task-item__text">${inputValue}</span>
        </div>
          <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${divTask.dataset.id}">
          Удалить
          </button>
      </div>
    `;
    taskList.append(divTask);
  } else {
    alert(`Введите задачу`);
  }
});
