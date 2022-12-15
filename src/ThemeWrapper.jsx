import React from 'react'
import SpaceXTheme from './theme'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
const ThemeWrapper = ({ children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={SpaceXTheme}>
                <ThemeProvider theme={SpaceXTheme}>
                    {children}
                </ThemeProvider>
            </MuiThemeProvider>
        </StyledEngineProvider>
    )
}

export default ThemeWrapper