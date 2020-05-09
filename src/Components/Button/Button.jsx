import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Button = (props) => {
  const {
    tag, to, children, handlerClick
  } = props
  const classes = useStyles(props)

  return tag === 'link' ? (
    <Link className={classes.button} to={to} onClick={handlerClick}>
      {children}
    </Link>
  ) : (
    <button className={classes.button} onClick={handlerClick}>
      {children}
    </button>
  )
}

export default Button
