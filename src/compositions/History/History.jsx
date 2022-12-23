import * as React from 'react';
import { Button } from '../../components'
import { StyledHistoryMainImageContainer } from './History.styled';
import logo from '../../assets/logo.jpg';
const History = () => {
    return (
        <>
            <StyledHistoryMainImageContainer>
                <img src={logo} alt="logo" />
            </StyledHistoryMainImageContainer>
            <Button label='Launches' buttonStyle='secondary' href='/Launches' />
        </>
    )
}
export default History