import React from 'react'
import { StyledHeaderContainer, StyledHeaderLogo, StyledHeaderMenu } from "./";
import {Button} from '../'
import logo from '../../assets/logo.jpg'

export const Header = () => {
    return (
        <StyledHeaderContainer>
            <a href = './' >
                <StyledHeaderLogo src={logo} alt = 'SpaceX logo' />
            </a>
            <StyledHeaderMenu>
                <Button size = 'small' label = 'History' href ='/history' />
                <Button size = 'small' label = 'Launches' href = '/launches' />
            </StyledHeaderMenu>
        </StyledHeaderContainer>
    )
}