import React from 'react';

export default function Contacts({ email, phone }) {
	return (
		<div>
			<label>Контакты</label>
			<div>Почта {email}</div>
			<div>Телефон {phone}</div>
		</div>
	);
}
