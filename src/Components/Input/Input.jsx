import React from 'react'
import { useStyles } from './styles'
// import { colors } from '../../styles/colors'

const Input = (props) => {
  const classes = useStyles()
  const {
    funcOnChange, type, name, label
  } = props

  return (
    <div>
      <label className={classes.label} htmlFor={name}>{label}</label>
      <input
        className={classes.input}
        type={type}
        name={name}
        id={name}
        onChange={(evt) => funcOnChange(evt.target.value)}
      />
    </div>
  )
}

export default Input
