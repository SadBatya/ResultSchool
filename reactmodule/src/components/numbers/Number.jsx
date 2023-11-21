import React from 'react';
import { useState, useCallback } from 'react';

export const numField = () => {
  
}

export default function number() {
  const [num, setNum] = useState(0);
  const [degree, setDegree] = useState(0);
  const [result, setResult] = useState(0);


  const onNumChange = useCallback(({ target }) => {
    setNum(Number(target.value))
    setResult(Math.pow(Number(target.value), degree))
  }, [degree])

  const onDegreeChange = useCallback({ target }) => {
    setDegree(Number(target.value))
    setResult(Math.pow(num, Number(target.value)))
  }, [num]}

  return (
    <div>
      <div>
        {num} в степени {degree} = {result}
      </div>
      <label>
        <span>Число</span>
        <input
          type='number'
          value={num}
          onChange={onNumChange}
        />
        <input
          type='number'
          value={degree}
          onChange={onDegreeChange}
        />
      </label>
    </div>
  );
}
