import React, { useState } from 'react';
import styles from './MyComponent.module.css';

// const getTimeFromDate = (date) => date.toISOString().substring(11,19)
const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

export default function MyComponent() {
	const [value, setValue] = useState('');
	// const handleClick = (sym) => {
	// 	setValue((updateValue) => updateValue + '+')
	// }
	return (
		<div className={styles.calculator}>
			<div className={styles.calculator__inner}>
				<h1>calculator v1.0</h1>
				<input className={styles.input} type="text" value={value} />
				<div className={styles.buttons}>
					{numbers.map((num) => (
						<button
							onClick={() => setValue((updateValue) => updateValue + num)}
							className={styles.symbols}
						>
							{num}
						</button>
					))}
					<button
						onClick={() => setValue((updateValue) => updateValue + '+')}
						className={styles.symbols}
					>
						+
					</button>
					<button
						onClick={() => setValue((updateValue) => updateValue + '-')}
						className={styles.symbols}
					>
						-
					</button>
					<button
						onClick={() => setValue((updateValue) => eval(updateValue))}
						className={styles.symbols}
					>
						=
					</button>
					<button
						onClick={() => setValue(() => setValue(''))}
						className={styles.symbols}
					>
						C
					</button>
				</div>
			</div>
		</div>
	);
}
