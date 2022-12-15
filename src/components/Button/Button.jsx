import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton, StyledSmallButton } from './'

export const Button = (props) => {
    if (props.buttonStyle === 'primary') {
        return (
            <div>
                <StyledPrimaryButton>
                    {props.label}
                </StyledPrimaryButton>
            </div>
        )
    }
    else if (props.buttonStyle === 'secondary') {
        return (
            <div>
                <StyledSecondaryButton>
                    {props.label}
                </StyledSecondaryButton>
            </div>
        )
    }

    else if (props.size === 'small'){
        return (
            <StyledSmallButton>
                {props.label}
            </StyledSmallButton>
        )
    }
}