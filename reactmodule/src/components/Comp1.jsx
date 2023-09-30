import React, { useState } from 'react';

const Counter = ({ value, setValue }) => {
  const [currentValue, setCurrentValue] = useState(value)
	return (
		<>
			<div>{currentValue}</div>
      <button onClick={() => setValue(value + 1)}>{value} +1</button>
		</>
	);
};

export default function Comp1() {
	const [value, setValue] = useState(0);
	return (
		<div>
			<label>Счетчик: {value}</label>
			<Counter value={value} setValue={setValue}/>
		</div>
	);
}
