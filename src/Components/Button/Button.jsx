import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const Button = (props) => {
  const {
    tag, to, children, handlerClick, testId, disabled
  } = props
  const classes = useStyles(props)

  return tag === 'link' ? (
    <Link
      className={classes.button}
      to={to}
      onClick={handlerClick}
      data-testid={testId}
      disabled={disabled}
      >
      {children}
    </Link>
  ) : (
    <button
      className={classes.button}
      onClick={handlerClick}
      data-testid={testId}
      disabled={disabled}
      >
      {children}
    </button>
  )
}

export default Button
