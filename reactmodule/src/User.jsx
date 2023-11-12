import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'


export default function User() {
  const { userData,  dispatch} = useContext(AppContext)
  const { name, age, email } = userData
  const onUserUpdate = () => {
    // serUserData({
    //   age: 30,
    // })
    
    dispatch({type: "SET_USER_DATA", payload: {name, age: 30, email}})
  }
  return (
    <div>
      <h1>Данные пользователя</h1>
      <h2>{ name }</h2>
      <h3>{ age }</h3>
      <h3>{ email }</h3>
      <button onClick={onUserUpdate}>Обновить пользователя</button>
    </div>
  )
}
