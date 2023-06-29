// const firstNavButton = document.querySelector('.main-navigation__button-item')
// firstNavButton.addEventListener('click', (event) => {
//   // const target = event.target
//   const { target } = event
//   target.classList.add('main-navigation__button-item_selected')

// })

const allNavButton = document.querySelectorAll('.main-navigation__button-item')
allNavButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    allNavButton.forEach((button) => {
      button.classList.remove(main-navigation__button-item_selected')
    })
    const { target } = event;
    target.classList.add('main-navigation__button-item_selected')
  })
})

// submit 
const createTaskForm = document.querySelector('.create-task-block')
createTaskForm.addEventListener('sumbit', (event) => {
  console.log(event)
})