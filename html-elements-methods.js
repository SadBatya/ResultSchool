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

const firstParagraph = document.querySelector("p");
firstParagraph.replaceWith(newParagraph);
