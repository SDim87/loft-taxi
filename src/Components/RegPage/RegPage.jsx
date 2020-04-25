import React from 'react'
import { Link } from 'react-router-dom'

const RegPage = () => {
  return (
    <>
      <h1>Регистрация</h1>
      <p>Уже зарегистрирован <Link to="/">Войти</Link></p>
      <input type="email" name="" id="" placeholder="Адрес электронной почты"/>
      <input type="text" name="" id="" placeholder="Имя"/>
      <input type="text" name="" id="" placeholder="Фамилия"/>
      <input type="password" name="" id="" placeholder="Пароль"/>
    </>
  )
}

export default RegPage
