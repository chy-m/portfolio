import { createMuiTheme } from '@material-ui/core/styles'
import 'styled-components'

export const spacingMap = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64,
  xxl: 128,
  xxxl: 256,
  _4px: '4px',
  _8px: '8px',
  _16px: '16px',
  _24px: '24px',
  _32px: '32px',
  _50px: '50px',
  _58px: '58px',
  _64px: '64px',
  _128px: '128px',
  _256px: '256px',
}

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

export const fontFamily = [
  'Futura PT',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  ' Helvetica Neue',
  'sans-serif',
].join(',')

export const typography = {
  body1: {
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 1.5,
  },
  h1: {
    fontSize: '6em',
    fontWeight: 'normal',
    lineHeight: 1.5,
    fontFamily,
  },
  h2: {
    fontSize: 32,
    fontWeight: 'normal',
    lineHeight: 1.5,
    fontFamily,
  },
  h3: {
    fontWeight: 'normal',
    fontSize: 28,
    lineHeight: 1.5,
    fontFamily,
  },
  h4: {
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 1.5,
    fontFamily,
  },
  h5: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.5,
    fontFamily,
  },
  h6: {
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 1.5,
    fontFamily,
  },
  subtitle1: {
    fontWeight: 300,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
  },
  checkboxSmall: {
    fontSize: 16,
    fontWeight: 300,
  },
  fontFamily,
}

const lightPink = '#ffdce2'
const darkPink = '#ff8383'
const white = '#fffff'
const black = '#000000'

export const darkTheme = createMuiTheme({
  palette: {
    text: {
      primary: lightPink,
    },
    background: {
      default: black,
    },
  },
  typography: typography,
})

export const lightTheme = createMuiTheme({
  palette: {
    text: {
      primary: darkPink,
    },
    background: {
      default: white,
    },
  },
  typography: typography,
})

const muiLink = {
  color: white,
  root: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
}

darkTheme.overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        fontSize: typography.body1.fontSize,
      },
    },
  },
  MuiLink: muiLink,
}

lightTheme.overrides = {
  MuiCssBaseline: {
    '@global': {
      body: {
        fontSize: typography.body1.fontSize,
      },
    },
  },
  MuiLink: muiLink,
}
