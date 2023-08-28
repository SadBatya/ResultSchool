// Делегирование собтый
const allNavigationButton = document.querySelectorAll(
  '.main-navigation__button-item'
);

// с помощью данного кода ставиться слушатель на кажду кнопку

// allNavigationButton.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     const targetButton = event.target
//     allNavigationButton.forEach((navButton) => {
//       navButton.classList.remove('main-navigation__button-item_selected')
//     })
//     targetButton.classList.add('main-navigation__button-item_selected')
//   })
// })


//поэтому нужно использовать делегирование событый и работать с родителем элементов

const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.addEventListener('click', (event) => {
  console.log('клик на контейнер')
  const isNavButton = event.target.closest('.main-navigation__button-item');
  if (isNavButton) {
    allNavigationButton.forEach((navButton) => {
      navButton.classList.remove('main-navigation__button-item_selected');
    });
    event.target.classList.add('main-navigation__button-item_selected');
  }
});


const firstNavButton = document.querySelector('.main-navigation__button-item')
firstNavButton.addEventListener('click', (event) => {
  console.log('первая кнопка', event.target)
})

document.body.addEventListener('click', (event) => {
  console.log('клик на боди', event.target)
})