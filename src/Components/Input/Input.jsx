import React from 'react'
import { useStyles } from './styles'

const Input = (props) => {
  const classes = useStyles()
  const {
    type, name, label, testId, valueInput, setValueInput
  } = props

  return (
    <div>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        data-testid={testId}
        className={classes.input}
        type={type}
        name={name}
        id={name}
        autoComplete={'off'}
        value={valueInput[name] ? valueInput[name] : ''}
        onChange={(evt) => setValueInput({
            ...valueInput,
            [`${evt.target.name}`]: evt.target.value,
          })
        }
      />
    </div>
  )
}

export default Input
