import React from 'react'
import logo from '../../assets/logo.jpg'
import { StyledLaunchesMainImageContainer } from './Launches.styled'
import { Button } from '../../components'

const Launches = () => {
    return (
        <>
            <StyledLaunchesMainImageContainer>
                <img src={logo} alt='logo' />
            </StyledLaunchesMainImageContainer>
            <Button label='History' href='/history' buttonStyle='secondary' />
        </>
    )
}
export default Launches