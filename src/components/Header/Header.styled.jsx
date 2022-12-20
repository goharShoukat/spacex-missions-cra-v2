import Box from '@mui/material/Box';
import styled from 'styled-components';
import { colors, SPACING, SMALL_SPACING, MAX_WIDTH } from '../../theme'

export const StyledHeaderContainer = styled(Box)`
    background-color: ${colors.black};
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${MAX_WIDTH};
    z-index: 5;
    padding: 5px ${SPACING};
`

export const StyledHeaderLogo = styled.img`
    max-height: 22px;
`

export const StyledHeaderMenu = styled(Box)`
    display: flex;
    align-items: center;
    padding: 5px ${SMALL_SPACING};
    margin-right: ${SMALL_SPACING};
`
