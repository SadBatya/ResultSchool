import React from 'react';
import { useSelector } from 'react-redux';
import {selectAge, selectName, selectEmail } from '../../selectors/index'

export default function User() {
  const name = useSelector(selectName)
  const age = useSelector(selectAge)
  const email = useSelector(selectEmail)


  return (
    <div>
      <p>Пользователь: {email}</p>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
    </div>
  );
}
