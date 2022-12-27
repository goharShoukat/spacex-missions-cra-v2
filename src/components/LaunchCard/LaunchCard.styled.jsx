import {
    Card, CardActionArea,
    TableContainer, TableHead
} from '@mui/material'

import styled from 'styled-components'
import { BORDER_RADIUS, SMALL_SPACING, SPACING, colors } from '../../theme'

export const StyledLaunchCard = styled(Card)`
background-color: ${colors.darkGray};
justify-content: space-between;
align-items: center;
padding: ${SMALL_SPACING};
margin: ${SPACING};
border-radius: ${BORDER_RADIUS};
width: calc(100vw - 60px);
`

export const StyledLaunchCardActionArea = styled(CardActionArea)`
text-align: left;
color: ${colors.white};
`

export const StyledTableContainer = styled(TableContainer)`
background-color: ${colors.lightGray};
margin: 30px 0;
`

export const StyledTableHead = styled(TableHead)`
background-color: ${colors.lightGray};
margin: 30px 0;
width: calc(100vw - 60px);
`