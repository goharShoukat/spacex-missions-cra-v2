import React from 'react'
import { createTheme} from '@mui/material/styles'

export const SMALL_SPACING = '1rem'
export const SPACING = '2rem'

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
    lightGray: '#efefef'
}
//what would happen if the curly baces are not put in here
const SpaceXTheme = createTheme({})
export default SpaceXTheme