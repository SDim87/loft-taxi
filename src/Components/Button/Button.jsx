import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Button = (props) => {
  const { text, tag, to } = props
  const classes = useStyles(props)

  return tag === 'link' ? (
    <Link className={classes.button} to={to}>{text}</Link>
  ) : (
    <button className={classes.button}>{text}</button>
  )
}

export default Button
