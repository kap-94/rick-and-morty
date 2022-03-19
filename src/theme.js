import { createTheme } from '@mui/material/styles'

const white = '#fff'

const theme = createTheme({
  palette: {
    common: {
      white: white
    },
    primary: {
      main: '#071633'
    },
    secondary: {
      main: '#6ECCAF'
    }
  },
  typography: {
    h3: {
      color: '#6ECCAF',
      fontFamily: 'Bangers, cursive',
      textShadow:
                `0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #0fa,
            0 0 82px #0fa,
            0 0 92px #0fa,
            0 0 102px #0fa,
            `
    },
    h5: {
      color: '#071633',
      fontFamily: 'Bangers, cursive',
      textShadow:
                `0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #0fa,
            0 0 82px #0fa,
            0 0 92px #0fa,
            0 0 102px #0fa,
            `
    },
    subtitle1: {
      color: white,
      fontWeight: 600,
      textTransform: 'uppercase'
    },
    subtitle2: {
      color: white,
      fontFamily: 'Bangers, cursive',

      fontWeight: 300,
      fontSize: '1.65rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    },
    body1: {
      color: white
    }
  }

})

export default theme
