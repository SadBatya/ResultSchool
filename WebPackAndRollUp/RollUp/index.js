import "./index.css";
import JS_IMAGE from './assets/js.png'
import GACHY from './assets/zdarova.jpeg'

const body = document.querySelector('body')


const button = document.createElement('button')
button.innerHTML = 'Кликни :D'
body.append(button)


const h1 = document.createElement('h1')
h1.innerText = 'I love JavaScript'
body.append(h1)

const IMG = document.createElement('img')
IMG.src = JS_IMAGE 
body.append(IMG)


const IMG2 = document.createElement('img')
IMG2.src = GACHY
IMG2.classList.add('hide')
body.append(IMG2)

console.log('Hello World!')


button.addEventListener('click', () => {
  IMG2.classList.toggle('hide')
  setTimeout(() => {
    IMG2.classList.add('hide')
  }, 1000)
})