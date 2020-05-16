import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useStyles } from './styles'
import Input from '../Input'
import Button from '../Button'
import { data } from './data'
import { changeCard, fetchCard } from '../../Redux/Actions/Actions'

const Profile = ({ changeCard, fetchCard, card }) => {
  const classes = useStyles()

  const [valueCard, setValueCard] = useState({})

  useEffect(() => {
    fetchCard()
  }, [])

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
      <form>
        <div className={classes.profile__cards}>
          <section className={classes.card}>
            <div className={classes.card__wrap}>{generateInputs(data[0])}</div>
          </section>
          <section className={classes.card}>
            <div className={classes.card__wrap}>{generateInputs(data[1])}</div>
          </section>
        </div>
        <div className={classes.profile__btn}>
          <Button
            style={'brand'}
            handlerClick={(evt) => {
              evt.preventDefault()
              changeCard(valueCard)
            }}
            data-testid="save-card"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </article>
  )
}
const mapStateToProps = ({ SystemData }) => {
  return {
    card: SystemData.card
  }
}

const mapDispatchToProps = { changeCard, fetchCard }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
