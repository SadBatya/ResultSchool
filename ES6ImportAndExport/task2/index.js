import './index.css';

const cookieWindow = document.querySelector('.cookie-consent');
const cookieButton = document.querySelector('.cookie-consent__button');
const stateInLocal = localStorage.getItem('state');
const parseState = JSON.parse(stateInLocal);
let buttonClick = false;

if (parseState === true) {
  cookieWindow.classList.add('hide');
}

cookieButton.addEventListener('click', () => {
  buttonClick = true;
  cookieWindow.classList.add('hide');
  localStorage.setItem('state', buttonClick);
});

