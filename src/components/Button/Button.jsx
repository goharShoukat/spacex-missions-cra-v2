import React from 'react';
import { StyledPrimaryButton, StyledSecondaryButton, StyledSmallButton } from './'

export const Button = ({label, href,buttonStyle='',  size='medium', ...otherProperties}) => {
    if (buttonStyle === 'primary') {
        return (
            <div>
                <StyledPrimaryButton href={href} {...otherProperties} >
                    {label}
                </StyledPrimaryButton>
            </div>
        )
    }
    else if (buttonStyle === 'secondary') {
        return (
            <div>
                <StyledSecondaryButton href={href} {...otherProperties} >
                    {label}
                </StyledSecondaryButton>
            </div>
        )
    }

    else if (size === 'small') {
        return (
            <div>
                <StyledSmallButton href={href} {...otherProperties} >
                    {label}
                </StyledSmallButton>
            </div>
        )
    }
    else {
        return null
    }
}