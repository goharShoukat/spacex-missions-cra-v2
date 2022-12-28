import Button from '@mui/material/Button';
import styled from 'styled-components'

import { colors } from '../../theme'

export const StyledMaterialButton = styled(Button)`
 border : 1px solid;
 margin : 12px;
 padding : 0 24px;
 min-width : 120px;
 height: 40px;
 color: ${colors.black};
 border-radius: 0;
 /*&:hover is used here because otherwise the css file would need to be added
 to provide hovering property. :hover is a pseudo class and pseudo classes */
 &:hover{
     background-color: ${colors.gray};
 }
 `

//create primary button by extending the MUIButton defined above

export const StyledPrimaryButton = styled(StyledMaterialButton)`
 color:${colors.white};
 border-color: ${colors.white};
 background-color:${colors.black};
 `

export const StyledSecondaryButton = styled(StyledMaterialButton)`
 color: ${colors.black};
 border-color: ${colors.white};
 background-color: ${colors.white};
 `

 export const StyledSmallButton = styled(StyledMaterialButton)`
 color: ${colors.white};
 background-color: ${colors.black};
 border-color: ${colors.transparent};
 min-width: 90px;
 height: 30px;

 &:hover {
    background-color: ${colors.transparent};
    border-bottom: 3px solid ${colors.white};
 }
 `