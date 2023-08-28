import { getRandomColor } from './utils';
const body = document.querySelector('body');

export function initApp() {
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Изменить цвет страницы';
  body.append(button);

  button.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColor();
  });
}

initApp();
