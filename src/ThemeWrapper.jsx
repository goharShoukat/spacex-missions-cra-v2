import React from 'react'
import SpaceXTheme from './theme'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = ({ children }) => {
    return (
        <MuiThemeProvider theme={SpaceXTheme}>
            <ThemeProvider theme = {SpaceXTheme}>
                {children}
            </ThemeProvider>
        </MuiThemeProvider>

    )
}

export default theme