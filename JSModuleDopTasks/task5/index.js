import './index.css';
import getNowdate from './components/getNowdate';

const donateList = document.querySelector('.donates-container__donates')
const input = document.querySelector('.donate-form__donate-input')
const button = document.querySelector('.donate-form__submit-button')
const allDonate = document.querySelector('#total-amount')
const allDonateArr = []

button.addEventListener('click', (e) => {
  e.preventDefault()
  createDiv(input.value)
  input.value = ''
  allDonate.innerText = reduceDonate() + '$'
})


function createDiv(value) {
  const div = document.createElement('div');
  div.className = 'donate-item';
  const bValue = document.createElement('b')
  bValue.innerText = value + '$'
  div.innerText = `${getNowdate()} - `;
  donateList.append(div)
  div.append(bValue) 
  allDonateArr.push(Number(value))  
}


function reduceDonate(){
  return allDonateArr.reduce((acc, num) => acc + num, 0)
}









