import Box from '@mui/material/Box';
import styled from 'styled-components';
import { colors, MAX_WIDTH } from '../../theme'

export const StyledLayoutContainer = styled(Box)`
    background-color: ${colors.black};
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    min-height: 100vh;
`

