import React, { useState } from 'react';
import styles from './MyComponent.module.css';

// const getTimeFromDate = (date) => date.toISOString().substring(11,19)
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export default function MyComponent() {
	const [value, setValue] = useState('');
	console.log(typeof numbers)
	return (
		<div className={styles.calculator}>
			<div className={styles.calculator__inner}>
				<input className={styles.input} type="text" value={value} />
				<div className={styles.buttons}>
					{numbers.map((num) => (
						<button onClick={() => setValue((updateValue) => updateValue + {num})} className={styles.symbols}>{num}</button>
					))}
					<button onClick={() => setValue((updateValue) => updateValue + '+')} className={styles.symbols}>+</button>
					<button onClick={() => setValue((updateValue) => updateValue + '-')} className={styles.symbols}>-</button>
					<button onClick={() => setValue((updateValue) => updateValue + '=')} className={styles.symbols}>=</button>
					<button onClick={() => setValue((updateValue) => updateValue + '=')} className={styles.symbols}>C</button>
				</div>
				<p>{value}</p>
			</div>
		</div>
	);
}
