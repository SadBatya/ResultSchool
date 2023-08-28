const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
];

const container = document.querySelector('#container');
const list = document.querySelector('.select-dropdown__list');
const button = container.querySelector('button');
const inputText = document.querySelector('.select-dropdown__text')


button.addEventListener('click', () => {
  if (list.classList.contains('active')) {
    list.classList.remove('active');
  } else {
    list.classList.add('active');
  }
});


list.addEventListener('click', e => {
  console.log(e.target.dataset.value)
  options.forEach(t => {
    if(t.value == e.target.dataset.value){
      inputText.textContent = t.text
      list.classList.remove('active');
    }
  })
})


class CustomSelect {
  constructor(id, options) {
    this.id = id;
    this.options = options;
  }

  render(container) {}
}

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
