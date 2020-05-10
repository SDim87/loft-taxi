import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'

export const useStyles = createUseStyles({
  profile: {
    minWidth: '945px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: ' translate(-50%, -50%)',
    boxShadow: '6px 5px 15px 0 rgba(0, 0, 0, .11)',
    padding: [60, 68, 70],
    boxSizing: 'border-box',
    backgroundColor: `${colors.base0}`,
    borderRadius: '5px',
    zIndex: '10',

    '& h1': {
      fontSize: '36px',
      fontWeight: '700',
      color: `${colors.base3}`,
      marginBottom: '10px',
      textAlign: 'center',
    },
  },
  profile__text: {
    color: `${colors.base5}`,
    textAlign: 'center',
    marginBottom: '50px',
  },
  profile__cards: {
    display: 'flex'
  },
  card: {
    width: '50%',
    boxShadow: '6px 0 20px 0 rgba(0, 0, 0, .15)',
    borderRadius: '5px',

    '&:first-child': {
      marginRight: '30px'
    }
  },
  card__wrap: {
    padding: [40, 30, 30],

    '& > div:not(:last-child)': {
      marginBottom: '35px'
    }
  },
  profile__btn: {
    textAlign: 'center',
    marginTop: '20px',
  }
})
