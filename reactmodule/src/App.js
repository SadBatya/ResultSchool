import './App.css';
import Select from 'react-select';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
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
	const submitButtonUseRef = useRef(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);
		const error = validateAndGetErrorMessage(loginChangeScheme, target.value);
		setLoginError(error);

		if (target.value.length === 20) {
			submitButtonUseRef.current.focus();
		}
	};

	const onBlur = () => {
		const error = validateAndGetErrorMessage(loginBlurScheme, login);
		setLoginError(error);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(login);
	};

	const [stateCounter, setStateCounter] = useState(0);
	const refCounter = useRef(0);

	const incrementRefCounter = () => {
		refCounter.current = refCounter.current + 1;
		console.log(refCounter);
	};

	const incrementStateCounter = () => {
		setStateCounter(stateCounter + 1);
		console.log(stateCounter);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
	});

	const onSubmit2 = (formData) => {
		console.log(formData);
	};
	const loginError2 = errors.login?.message;
	const loginProps = {
		minLength: { value: 3, message: 'Должно быть больше 3-х символов' },
		maxLength: { value: 20, message: 'Должно быть меньше 20 символов' },
		pattern: { value: /^[\w_]*$/, message: 'Должны использоваться буквы или цифры' },
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
			<form onSubmit={onSubmit2}>
				{loginError && <div className="errorLabel">{loginError}</div>}
				<input
					name="login"
					type="text"
					value={login}
					placeholder="Логин"
					onChange={onLoginChange}
					onBlur={onBlur}
				/>
				<button
					ref={submitButtonUseRef}
					type="submit"
					disabled={loginError !== null}
				>
					Отправить
				</button>
			</form>
			<div>
				<p>refCounter: {refCounter.current}</p>
				<button onClick={incrementRefCounter}>Приибавить рефкоунтер</button>
				<p>stateCounter: {stateCounter}</p>
				<button onClick={incrementStateCounter}>Прибавить стэйткоунтер</button>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className="errorLabel">{loginError2}</div>}
				<input name="login" type="text" {...register('login', loginProps)}/>
				<button type="submit" disabled={!!loginError2}>
					Отправить
				</button>
			</form>
		</>
	);
}
