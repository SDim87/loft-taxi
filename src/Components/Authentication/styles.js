import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'

export const useStyles = createUseStyles({
  popup: {
    backgroundColor: `${colors.base0}`,
    minWidth: '500px',
    borderRadius: '5px',
    padding: [60, 50],
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    right: '80px',
    transform: 'translateY(-50%)',

    '& h1': {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '30px'
    }
  },
  newUser: {
    marginBottom: '40px'
  },
  link: {
    color: `${colors.blue}`,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  groupInput: {
    marginBottom: '40px',

    '& div:not(:last-child)': {
      marginBottom: '30px'
    }
  },
  btn__wrap: {
    textAlign: 'end'
  }
})
