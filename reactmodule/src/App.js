import './App.css';
import Select from 'react-select';
import React, { useState } from 'react';
import * as yup from 'yup';

const loginChangeScheme = yup
	.string()
	.matches(/^[\w_]*$/, 'Неверный логин')
	.max(20, 'Не больше 20 символов');

const loginBlurScheme = yup.string().min(3, 'Не меньше 3 символов');

const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null;

	try {
		scheme.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join('\n');
	}
	return errorMessage;
};

export default function App() {
	const productOptions = [
		{ value: 'tv', label: 'телевизор' },
		{ value: 'smartphone', label: 'смартфон' },
		{ value: 'laptop', label: 'ноутбук' },
	];

	const colorOptions = [
		{ value: 'black', label: 'Черный' },
		{ value: 'silver', label: 'Серебристый' },
		{ value: 'white', label: 'Белый' },
	];

	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);
		const error = validateAndGetErrorMessage(loginChangeScheme, target.value);
		setLoginError(error);
	};

	const onBlur = () => {
		const error = validateAndGetErrorMessage(loginBlurScheme, login);
		setLoginError(error);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(login);
	};

	return (
		<>
			<div>
				<Select
					className="select"
					options={productOptions}
					defaulValue={productOptions[0]}
				/>
				<Select
					isMulti
					options={colorOptions}
					defaulValue={[colorOptions[0], colorOptions[1]]}
				/>
			</div>
			<form onSubmit={onSubmit}>
				{loginError && <div className="errorLabel">{loginError}</div>}
				<input
					name="login"
					type="text"
					value={login}
					placeholder="Логин"
					onChange={onLoginChange}
					onBlur={onBlur}
				/>
				<button type="submit" disabled={loginError !== null}>
					Отправить
				</button>
			</form>
		</>
	);
}
