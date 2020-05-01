import React from 'react'
import { useStyles } from './styles'
import Input from '../Input'

const Profile = () => {
  const classes = useStyles()

  return (
    <article className={classes.profile}>
      <h1>Профиль</h1>
      <p className={classes.profile__text}>Способ оплаты</p>
      <form action="" method="POST">
        <div className={classes.profile__cards}>
          <section className={classes.card}>
            <div className={classes.card__wrap}>
              <Input type={'text'} name={'number_card'} label={'Номер карты:'} />
              <Input type={'text'} name={'date_card'} label={'Срок действия:'} />
            </div>
          </section>
          <section className={classes.card}>
            <div className={classes.card__wrap}>
              <Input type={'text'} name={'name_card'} label={'Имя владельца:'} />
              <Input type={'text'} name={'key_card'} label={'CVC:'} />
            </div>
          </section>
        </div>
        <button onClick={(evt) => evt.preventDefault()}>Сохранить</button>
      </form>
    </article>
  )
}

export default Profile
