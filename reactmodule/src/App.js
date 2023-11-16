import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { AppContext } from './context';
import User from './User';

const userInfo = () => ({
  name: 'Vladimir',
  age: 25,
  email: 'sadbatya@mail.ru',
});

const getAnotherUserInfo = () => ({
  name: 'Kolya',
  age: 28,
  email: 'kolya@mail.ru',
});

export default function App() {
  const [userData, dispatch] = useReducer(reducer, {});
  
  useEffect(() => {
    const userData = userInfo();
    dispatch({ type: 'SET_USER_DATA', payload: userData});
  }, []);

  const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case 'SET_USER_DATA': {
        return payload
      }
      case 'SET_USER_AGE': {
        return {
          ...state,
          age: payload,
        };
      }
      default:
        return state
    }
  } 

  const setUserData = (action) => {
   const newState = reducer(userData, action)
   dispatch(newState)
  };

  const onUserChange = () => {
    const anotherUserData = getAnotherUserInfo();
    dispatch({type: 'SET_USER_DATA', payload: getAnotherUserInfo});
  };

  return (
    <AppContext.Provider value={{ userData, dispatch }}>
      <h1>Hello!</h1>
      <User />
      <span>Кнопка для смены пользователя</span>
      <button onClick={onUserChange}>Сменить пользователя</button>
    </AppContext.Provider>
  );
}
