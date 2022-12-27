import { Card, CardActionArea } from '@mui/material'
import styled from 'styled-components'
import { BORDER_RADIUS, MAX_WIDTH, SMALL_SPACING, SPACING, colors } from '../../theme'

export const StyledLaunchCard = styled(Card)`
background-color: ${colors.darkGray};
justify-content: space-between;
align-items: center;
padding: ${SMALL_SPACING};
border-radius: ${BORDER_RADIUS};
width: calc()
`

export const StyledLaunchCardActionArea = styled(CardActionArea)`
text-align: left;
color: ${colors.white};
`