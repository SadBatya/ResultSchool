// createElement - позволяет создавать элементы

const newNavButton = document.createElement('a')
newNavButton.className = 'main-navigation__button-item'
newNavButton.href = '#tasks_expired'
newNavButton.dataset.buttonId = '4'
newNavButton.textContent = 'Просроченные задачи'
console.log(newNavButton)

// prepend() — вставляет элемент в начало заданного узла.
// append() — вставляет элемент в конец узла. 
// before() — вставляет элемент перед узлом.
// after() — вставляет элемент после узла.

const mainNavigation = document.querySelector('.main-navigation')
mainNavigation.append(newNavButton) // append добавляет в самый низ блока по списку
mainNavigation.prepend(newNavButton) // prepend добавляет в самое начало блока


//insertAdjacentElement тоже добавляет элементы и принимает в себя несколько параметров
// position и element
// виды position:
// beforebegin - будет вставлять в самое начало элемента
// afterbegin - в самом начале тега <p>
// beforeend - в самый конец тега <p>
// afterend - будет добавляться после указанного элемента


mainNavigation.insertAdjacentElement('beforebegin', newNavButton)


// replaceWith() - позволяет заменить один блок на другой
// Заменим первый абзац на новый с помощью этого метода:

// const firstParagraph = document.querySelector("p");
// firstParagraph.replaceWith(newParagraph);

// remove - позволяет удалить элемент с DOM
// mainNavigation.remove()


const taksItemText = document.querySelector('.task-item__text')
console.log(taksItemText)

// closest - находим ближайший элемент
const taskItem = taksItemText.closest('.task-item')
console.log('taskItem', taskItem)

// classList: add, remove, toggle
// помогает изменить элемент
const firstNavigationbutton = document.querySelector('.main-navigation__button-item')
firstNavigationbutton.classList.add('main-navigation__button-item_selected'); //добавляет элемент
firstNavigationbutton.classList.remove('main-navigation__button-item_selected'); //удаляет элемент
firstNavigationbutton.classList.toggle('main-navigation__button-item_selected'); //если желемента нет - добавляет, если есть - удаляет


// работа с атрибутами
const createTaskInput = document.querySelector('.create-task-block__input')
createTaskInput.hasAttribute('type') // проверяет существует ли атрибут или нет true/false
createTaskInput.getAttribute('value') // можно получить значение атрибута
createTaskInput.removeAttribute('placeholder') // удаляет атрибут
createTaskInput.setAttribute('placeholder', 'Создать новую задачу') // создает новый атрибут и задает ему значение

