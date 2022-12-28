import styled from 'styled-components'
import Box from '@mui/material/Box';
import Input from  '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

import { colors, SPACING, SMALL_SPACING } from '../../theme'


export const StyledLaunchesMainImageContainer = styled(Box)`
  margin-top: 150px;
  margin-bottom: 50px;  
  pointer-events: none;
`

export const StyledFilterSection = styled(Box)`
  display: flex;
  justify-content: space-between;
`

export const StyledInputContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const StyledFilterByMissionInput = styled(Input)`
  background-color: ${colors.lightGray};
  margin: ${SPACING};
  padding: ${SMALL_SPACING};
`

export const StyledPayloadFilterSection = styled(Box)`
  text-align: left;
  display: flex;
  flex-direction: row;

`

export const StyledFormLabel = styled(FormLabel)`
  font-size: 20px;
  margin: 0 ${SPACING};
  color: ${colors.white};
`
export const FormLabelText = styled(Box)`
text-align: left;
`