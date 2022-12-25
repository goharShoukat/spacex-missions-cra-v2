import React, {useEffect} from 'react';
import { Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import {fetchAllHistoryData} from '../../store/history'
import { StyledHistoryMainImageContainer } from './History.styled';
import logo from '../../assets/logo.jpg';
import { Typography } from '@mui/material';

const History = () => {
    const launches = useSelector((state)=> state.history.launchHistory)
    const isLoading = useSelector((state) => state.history.loading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllHistoryData())
    }, [dispatch])

    if (isLoading && launches == null & !Array.isArray(launches)){
        <Typography>Loading...</Typography>
    }
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