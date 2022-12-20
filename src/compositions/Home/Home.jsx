import React from 'react'
import logo from '../../assets/logo.jpg'
import { StyledHomeContainer, StyledHomeHeaderImg, StyledHomeTypography } from "./Home.styled"
import {Button} from '../../components'

const Home = () => {
    return (
        <>
            <StyledHomeContainer>
                <StyledHomeHeaderImg src = {logo} alt = 'logo' />
                <StyledHomeTypography variant = 'h4'>Missions</StyledHomeTypography>
            <div>
                <Button buttonStyle = 'primary' label = 'History' href = '/history' />
                <Button buttonStyle = 'secondary' label = 'Launches' href = '/launches' />
            </div>
            </StyledHomeContainer>
        </>
    )
}

export default Home