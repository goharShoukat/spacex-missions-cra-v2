import * as React from 'react';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

import { SPACING } from '../../theme'

export const StyledHomeHeaderImg = styled.img`
    width: 40vmin;
    pionter-event: none;
`

export const StyledHomeContainer = styled(Box)`
    background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
export const StyledHomeTypography = styled(Typography)`
    margin: ${SPACING};
`