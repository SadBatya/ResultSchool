const tasksWrapper = document.querySelector('.tasks__wrapper');
console.log(tasksWrapper.className);
tasksWrapper.className = 'tasks__wrapper_1';
console.log(tasksWrapper.className);

const taskBlock = document.querySelector('#tasks');
// console.log(tasksBlock.id)

// taskBlock.id = 'new__tasks'

const submitButton = document.querySelector('.create-task-block__button');
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.textContent = 'Создать новую задачу';

//innerHTML
// console.log(taskBlock.innerHTML);
// taskBlock.innerHTML = '<b>adadsadsad</b>';

//children

const createTaskForm = document.querySelector('.create-task-block');
console.log(createTaskForm.children);

//data-атрибуты
const firstNavButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavButton.dataset.buttonId)

//style - с помощью данного метода можем менять и получать стили элементов
console.log(firstNavButton.style)
firstNavButton.style.fontWeight = 'bold'
firstNavButton.style.boxShadow = 'inset 0 0 0 3px' 
