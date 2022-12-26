import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components'
import { BORDER_RADIUS, MAX_WIDTH, SMALL_SPACING, SPACING, colors } from '../../theme'

export const StyledHistoryCard = styled(Card)`
background-color: ${colors.darkGray};
justify-content: space-betwee;
align-items: center;
width: 100%;
padding: ${SMALL_SPACING};
margin: ${SPACING};
border-radius: ${BORDER_RADIUS};
width: calc(100vw-60px);
max-width: ${MAX_WIDTH};
`

export const StyledHistoryCardActionArea = styled(CardActionArea)`
text-align: left;
color: ${colors.white};
`