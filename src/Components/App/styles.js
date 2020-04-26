import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'
import bg_main from '../../assets/img/background-main.jpg'


export const useStyles = createUseStyles({
  App: {
    color: `${colors.base3}`,
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    fontSize: '14px',
    backgroundColor: `${colors.base1}`,
    backgroundImage: `url(${bg_main})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  },
})
