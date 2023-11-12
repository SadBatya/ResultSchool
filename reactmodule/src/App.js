import React from 'react'
import { useState, useEffect } from 'react'
import { AppContext } from './context'
import User from './User'

const userInfo = () => ({
  name: 'Vladimir',
  age: 25,
  email: 'sadbatya@mail.ru'
})

const getAnotherUserInfo = () => ({
  name: 'Kolya',
  age: 28,
  email: 'kolya@mail.ru'
})

export default function App() {

  const [userData, setUserData] = useState({})
  useEffect(() => {
    const userData = userInfo()
    setUserData(userData)
  }, [])
  
  const dispatch = (action) => {
    const { type, payload } = action

    switch(type) {
      case 'SET_USER_DATA': {
        setUserData(payload)
        break
      }
      default:
    }
  }

  const onUserChange = () => {
    const anotherUserData =  getAnotherUserInfo()
    setUserData(anotherUserData)
  }

  return (
      <AppContext.Provider value={{userData, dispatch}}>
        <h1>Hello!</h1>
        <User />
        <span>Кнопка для смены пользователя</span>
        <button onClick={onUserChange}>Сменить пользователя</button>
      </AppContext.Provider>
  )
}
