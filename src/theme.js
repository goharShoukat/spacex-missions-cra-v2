import React from 'react'
import { createTheme} from '@mui/material/styles'

export const BORDER_RADIUS = '0.2rem'

export const SMALL_SPACING = '1rem'
export const SPACING = '2rem'
export const MAX_WIDTH = '986px'
export const colors = {
    primaryColor: '#005288',
    secondaryColor: '#A7A9AC',
    primaryText: '#565656',
    secondaryText: '#efefef',
    tertiaryText: '#888888',
    headerText: '#171717',
    black: '#000000',
    white: '#FFFFFF',
    darkGray: '#171717',
    lightGray: '#efefef',
    gray: '#888888',
    transparent: 'transparent',
}
//what would happen if the curly baces are not put in here
const SpaceXTheme = createTheme({})
export default SpaceXTheme