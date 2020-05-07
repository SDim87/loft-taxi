import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'

export const useStyles = createUseStyles({
  header: {
    height: '60px',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
    backgroundColor: `${colors.base0}`,
  },
  container: {
    maxWidth: '1170px',
    position: 'relative',
    margin: [0, 'auto'],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  nav: {
    '& a:not(:last-child)': {
      marginRight: '10px'
    }
  }
})
