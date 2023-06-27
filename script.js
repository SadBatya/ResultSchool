const tasksBlock = document.getElementById('tasks');
const allNavButtons = document.getElementsByClassName(
  'main-navigation__button-item'
);
console.log(allNavButtons);
console.log(tasksBlock);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

//querySelector

const tasksBlock2 = document.querySelector('#tasks');
console.log(tasksBlock2);

const mainNavigagtion = document.querySelector('.main-navigation');
console.log(mainNavigagtion);

const firstButton = document.querySelector('button');
console.log(firstButton);

const thirdNavigationButton = document.querySelector('[data-button-id="3"]');
console.log(thirdNavigationButton);


// querySelectorAll - выбирает все элемменты 

const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item')
console.log(allNavigationButtons)
allNavigationButtons.forEach((index, button) => {
  console.log(index, button)
})

const createTaskBlock = document.querySelector('.create-task-block')
const submitButton = createTaskBlock.querySelector('[type="submit"]')
console.log(submitButton)