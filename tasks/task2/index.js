const form = document.querySelector('.create-task-block');
const taskList = document.querySelector('.tasks-list');
const taskText = document.querySelectorAll('.task');
let toDos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const inputValue = taskNameInput.value;
  const isValid = validation(inputValue);
  if (isValid) {
    toDos.push(inputValue);
    console.log(toDos);
    const spanError = document.querySelector('.error-message-block');
    if (spanError) {
      spanError.remove();
      spanError.style.display = 'none';
    }
    const divTask = document.createElement('div');
    divTask.className = 'task-item';
    divTask.dataset.id = Date.now();
    divTask.innerHTML = `
      <div class="task-item" data-task-id="1">
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
  }
});

function validation(value) {
  const spanError = document.querySelector('.error-message-block');
  if (spanError) {
    spanError.remove();
  }
  if (!value) {
    const span = document.createElement('span');
    span.className = 'error-message-block';
    span.innerHTML = 'Название задачи не должно быть пустым';
    form.append(span);
  } else {
    const findTask = toDos.find((task) => task === value);
    if (findTask) {
      if (!spanError) {
        const span = document.createElement('span');
        span.style.display = 'block';
        span.className = 'error-message-block';
        span.innerHTML = 'Задача с таким названием уже существует.';
        form.append(span);
      }
      return false;
    } else {
      if (spanError) {
        spanError.remove();
      }
      return true;
    }
  }
}
