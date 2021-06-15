import React, { useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { CssBaseline } from '@material-ui/core'
import { darkTheme, lightTheme } from '../../theme'
import ThemeToggle from '../ThemeToggle'

export const ThemeProvider = ({ children, includeCssBaseline = true }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const theme = isDarkMode === true ? darkTheme : lightTheme

  useEffect(() => {
    if (localStorage.getItem('isDarkMode')) {
      setIsDarkMode(
        Boolean(JSON.parse(window.localStorage.getItem('isDarkMode')))
      )
    }
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        {includeCssBaseline && <CssBaseline />}
        <ThemeToggle
          isChecked={isDarkMode}
          handleOnToggle={() => {
            setIsDarkMode(prev => !prev)
            localStorage.setItem('isDarkMode', !isDarkMode)
          }}
        />
        <div>{children}</div>
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
