import { createUseStyles } from 'react-jss'
import { colors } from '../../styles/colors'

export const useStyles = createUseStyles({
  button: {
    display: 'inline-block',
    width: (props) => props.width || 'auto',
    padding: (props) => (props.style === 'brand' ? '0 30px' : '0 16px'),
    fontSize: (props) => (props.style === 'brand' ? '21px' : '16px'),
    fontWeight: (props) => (props.style === 'brand' ? '700' : '400'),
    lineHeight: (props) => (props.style === 'brand' ? '48px' : '32px'),
    color: colors.base6,
    backgroundColor: (props) => (props.style === 'brand' ? `${colors.yellow}` : `${colors.base7}`),
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    boxSizing: 'border-box',
    textAlign: 'center',
    transition: 'all 0.2s ease-in-out',
  }
})
