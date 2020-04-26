import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'

export const useStyles = createUseStyles({
  input: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `2px solid ${colors.base2}`,
    height: '30px',
    width: '100%',
    lineHeight: '30px',
    fontSize: '16px',
    color: `${colors.base3}`,
    fontFamily: 'Roboto',
    outline: 'none',

    '&::placeholder': {
      color: `${colors.base3}`
    },
    '&:focus': {
      borderBottom: `2px solid ${colors.blue}`,
    }
  },
  label: {

  }
})
