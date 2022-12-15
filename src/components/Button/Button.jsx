import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton } from './'

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
}