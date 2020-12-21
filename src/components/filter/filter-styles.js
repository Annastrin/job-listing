import {createUseStyles} from 'react-jss';
import {colors} from '../app/app-styles';
import {media} from '../app/app-styles';

const useStyles = createUseStyles({
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1100,
    minHeight: 60,
    margin: '-90px auto 55px',
    borderRadius: 5,
    padding: '10px 40px',
    backgroundColor: `${colors.White}`
  },

  tags: {
    margin: '0 -7px'
  },

  clear: {
    alignSelf: 'center',
    border: 'none',
    padding: 10,
    backgroundColor: 'transparent',
    color: `${colors.DarkGrayishCyan}`,
    fontWeight: 500,
    cursor: 'pointer',

    '&:hover': {
      color: `${colors.Primary}`,
      textDecoration: 'underline'
    }
  },

  [`@media screen and (max-width: ${media.tablet})`]: {
    filter: {
      padding: '10px 25px'
    }
  }
});

export default useStyles;