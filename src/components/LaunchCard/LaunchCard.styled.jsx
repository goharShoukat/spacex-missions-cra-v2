import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'

import styled from 'styled-components'
import { BORDER_RADIUS, SMALL_SPACING, SPACING, MAX_WIDTH, colors } from '../../theme'

export const StyledLaunchCard = styled(Card)`
  background-color: ${colors.darkGray};  
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${SMALL_SPACING};
  margin: ${SPACING};
  border-radius: ${BORDER_RADIUS};
  width: calc(100vw - 60px);
  max-width: ${MAX_WIDTH}
`
export const StyledLaunchCardActionArea = styled(CardActionArea)`
  text-align: left;
  color: ${colors.white};
`


export const StyledTableContainer = styled(TableContainer)`
  background-color: ${colors.lightGray};
  margin 30px 0;
`

export const StyledTableHead = styled(TableHead)`
  background-color: ${colors.lightGray};
  margin 30px 0;
  width: calc(100vw - 60px);
`