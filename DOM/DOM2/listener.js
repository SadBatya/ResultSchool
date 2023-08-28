// const firstNavButton = document.querySelector('.main-navigation__button-item')
// firstNavButton.addEventListener('click', (event) => {
//   // const target = event.target
//   const { target } = event
//   target.classList.add('main-navigation__button-item_selected')

// })

const allNavButton = document.querySelectorAll('.main-navigation__button-item');
allNavButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    allNavButton.forEach((button) => {
      button.classList.remove('main-navigation__button-item_selected');
    });
    const { target } = event;
    target.classList.add('main-navigation__button-item_selected');
  });
});

// submit
const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  const inputValue = taskNameInput.value;
  if (inputValue) {
    alert(`Вы создали задачу ${inputValue}`);
  } else {
    alert('Введите правильные данные');
  }
});

// keydown - срабатывает когда мы нажимаем на клавишу
// keyup - cрабатывает когда мы отпускаем клавишу

//keydown
document.addEventListener('keydown', (event) => {
  const { key } = event;
  console.log(key);
  const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
  if (taskItemToDelete) {
    const deleteConfirmed = confirm(
      'Вы действительно хотите удалить данную задачу'
    );
    if (deleteConfirmed) {
      taskItemToDelete.remove();
    }
  }
});

//keyup
document.addEventListener('keyup', (event) => {
  const { key } = event;
  console.log('keyup', key);
});

// mouseoveer

const createTooltip = (text) => {
  const toolTip = document.createElement('span');
  toolTip.textContent = text;
  toolTip.className = 'tooltip';

  return toolTip;
};

//mouseover - срабатывает при навдеение на объект
document.addEventListener('mouseover', (event) => {
  const { target } = event;
  // console.log(target)
  const isOverDeleteButton = target.className.includes(
    'task-item__delete-button'
  );
  if (isOverDeleteButton) {
    const taskItemHTML = target.closest('.task-item');
    const taskId = taskItemHTML?.dataset.taskId;
    if (taskId) {
      const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}`);
      target.append(tooltipHTML);
    }
  }
});

//mouseout - срабатывает когда убираем курсор с объекта

document.addEventListener('mouseout', (event) => {
  const { target } = event;
  const isOutFromDeleteButton = target.className.includes(
    'task-item__delete-button'
  );
  if (isOutFromDeleteButton) {
    const toolTip = document.querySelector('.tooltip');
    if (toolTip) {
      toolTip.remove();
    }
  }
});


//mousemove - срабатывает тогда когда мы двигаем мышью
document.addEventListener('mousemove', (event) => {
  console.log(event)
})


// contextmenu - срабатывает, когда мы открываем меню правой кнопкой мыши
document.addEventListener('contextmenu', (event) => {
  console.log(event)
  event.preventDefault()
})


// события для инпута change и input
// input срабатывает тогда, когда мы сразу вводим символ в инпут

const checkTaskNameInputOnValidation = (value) => {
  if(!value || value.includes('@')){
    return false
  }
  return true
}


const createTaskBlock = document.querySelector('.create-task-block')
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input')
taskNameInput.addEventListener('change', (event) => {
  console.log(event)
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




