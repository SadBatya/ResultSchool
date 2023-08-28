const container = document.querySelector('body')
const form = document.createElement('form')
const button = document.createElement('button')
button.type = 'submit'
button.innerHTML = 'зарегистрироваться'


const labelName = document.createElement('label')
labelName.innerHTML = 'Имя'


const inputName = document.createElement('input')
inputName.type = 'text'
inputName.name = 'userName'
inputName.placeholder = 'Введите ваше имя'


const passwordBox = document.createElement('label')
passwordBox.innerHTML = 'Пароль'


const inputSurname = document.createElement('input')
inputSurname.type = 'password'
inputSurname.name = 'password'
inputSurname.placeholder = 'Придумайте пароль'


container.prepend(form)
labelName.prepend(inputName)
passwordBox.prepend(inputSurname)
form.prepend(passwordBox)
passwordBox.prepend(inputSurname)
form.append(button)
form.prepend(labelName)