import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton, StyledSmallButton } from './'

export const Button = (props) => {
    if (props.buttonStyle === 'primary') {
        return (
            <div>
                <StyledPrimaryButton href={props.href}>
                    {props.label}
                </StyledPrimaryButton>
            </div>
        )
    }
    else if (props.buttonStyle === 'secondary') {
        return (
            <div>
                <StyledSecondaryButton href={props.href}>
                    {props.label}
                </StyledSecondaryButton>
            </div>
        )
    }

    else if (props.size === 'small') {
        return (
            <div>
                <StyledSmallButton href={props.href}>
                    {props.label}
                </StyledSmallButton>
            </div>
        )
    }
    else {
        return null
    }
}