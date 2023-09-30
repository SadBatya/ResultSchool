import React from 'react'
import Contacts from './Contacts'

export default function user({ name, age, ...contacts }) {
  return (
    <div>
			<label style={{color: 'red', backgroundColor: 'orange'}}>Приложение:</label>
			<div>Разная информация приложения</div>
			<div>
				<label style={{color: 'yellow', backgroundColor: 'black', textDecoration: 'underline'}}>Пользователь:</label>
				<div>Имя {name}</div>
				<div>Возраст {age}</div>
				<Contacts {...contacts}/>
			</div>
		</div>
  )
}
