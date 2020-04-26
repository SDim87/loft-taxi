import React from 'react'
import { useStyles } from './styles'

const Button = (props) => {
  const { text } = props
  const classes = useStyles()

  return (
    <button className={classes.button}>
      {text}
    </button>
  )
}

export default Button
