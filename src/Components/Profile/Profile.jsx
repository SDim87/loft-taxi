import React, { useState } from 'react'
import { useStyles } from './styles'
import Input from '../Input'
import Button from '../Button'
import { data } from './data'

const Profile = () => {
  const classes = useStyles()

  const [valueCard, setValueCard] = useState({})

  const generateInputs = (arr) => {
    return arr.map((el, i) => {
      return (
        <Input
          key={`${el.testId}${i}`}
          testId={el.testId}
          type={el.type}
          name={el.name}
          label={el.label}
          valueInput={valueCard}
          setValueInput={setValueCard}
        />
      )
    })
  }

  return (
    <article className={classes.profile}>
      <h1>Профиль</h1>
      <p className={classes.profile__text}>Способ оплаты</p>
      <form action="" method="POST">
        <div className={classes.profile__cards}>
          <section className={classes.card}>
            <div className={classes.card__wrap}>
              {generateInputs(data[0])}
            </div>
          </section>
          <section className={classes.card}>
            <div className={classes.card__wrap}>
              {generateInputs(data[1])}
            </div>
          </section>
        </div>
        <div className={classes.profile__btn}>
          <Button
            style={'brand'}
            handlerClick={((evt) => evt.preventDefault(), console.log('Click btn Save card data'))}
            data-testid="save-card"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </article>
  )
}

export default Profile
