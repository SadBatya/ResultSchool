import './App.css';
import Select from 'react-select'
import React, { useState } from 'react';

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

	return (
		<div>
			<Select className='select' options={productOptions} defaulValue={productOptions[0]}/>
			<Select isMulti options={colorOptions} defaulValue={[colorOptions[0], colorOptions[1],]}/>
		</div>
	);
}
