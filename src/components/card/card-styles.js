import {createUseStyles} from 'react-jss';
import {colors} from '../app/app-styles';
import {media} from '../app/app-styles';

const useStyles = createUseStyles({
  card: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1100,
    margin: '0 auto 30px',
    borderRadius: 5,
    padding: '30px 40px',
    backgroundColor: `${colors.White}`,
    boxShadow: `5px 5px 15px hsl(188, 40%, 88%)`,

    '&$featured::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 5,
      height: '100%',
      borderRadius: '5px 0 0 5px',
      backgroundColor: `${colors.Primary}`
    }
  },
  info: {
    display: 'flex',
    marginLeft: 0,
    marginRight: 'auto',
    paddingRight: 40
  },
  content: {},
  logo: {
    width: 88,
    height: 88,
    marginRight: '15px'
  },
  company: {
    display: 'inline-block',
    margin: '0 10px 0 0',
    fontSize: '1rem'
  },
  labels: {
    display: 'inline-block'
  },
  label: {
    display: 'inline-block',
    borderRadius: 50,
    margin: '0 3px',
    padding: '5px 10px',
    fontSize: '0.67rem',
    fontWeight: 600,
    color: `${colors.White}`,

    '&$new': {
      backgroundColor: `${colors.Primary}`
    },
    '&$featured': {
      backgroundColor: `${colors.VeryDarkGrayishCyan}`
    }
  },
  position: {
    margin: '10px 0',
    color: `${colors.VeryDarkGrayishCyan}`
  },
  meta: {
    color: `${colors.DarkGrayishCyan}`,
    '& span': {
      padding: '0 10px',

      '&:first-child': {
        paddingLeft: 0
      }
    }
  },
  tags: {
    display: 'flex',
    justifyContent: 'right',
    flexWrap: 'wrap',
    alignSelf: 'center'
  },
  new: {
    marginLeft: 0
  },
  featured: {},

  [`@media screen and (max-width: ${media.tablet})`]: {
    card: {
      padding: '30px 25px 23px'
    },
    logo: {
      width: 60,
      height: 60
    },
    info: {
      paddingRight: 20
    },
    tags: {
      flexShrink: 4
    }
  },
  [`@media screen and (max-width: ${media.mobile})`]: {
    card: {
      display: 'block',
      marginBottom: 55
    },
    info: {
      width: '100%',
      borderBottom: `1px solid ${colors.DarkGrayishCyan}`,
      padding: '0 0 20px 0'
    },
    tags: {
      width: '100%',
      margin: '0 -7px',
      paddingTop: 15,
      justifyContent: 'left',
      flexShrink: 1
    },
    logo: {
      position: 'absolute',
      top: '-25px',
      width: 50,
      height: 50
    }
  }
});

export default useStyles;