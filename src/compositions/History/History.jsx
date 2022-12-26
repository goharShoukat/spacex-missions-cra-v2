import React, { useEffect } from 'react';
import { Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllHistoryData } from '../../store/history'
import { StyledHistoryMainImageContainer } from './History.styled';
import logo from '../../assets/logo.jpg';
import { Typography } from '@mui/material';
import { HistoryCard } from '../../components'
const History = () => {
    const launches = useSelector(state => state.history.launchHistory)
    //console.log(launches)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllHistoryData())
    }, [dispatch])

    if (launches == null & !Array.isArray(launches)) {
        return (
            <Typography>Loading...</Typography>
        )
    }
    return (
        <>
            <StyledHistoryMainImageContainer>
                <img src={logo} alt="logo" />
            </StyledHistoryMainImageContainer>
            <Button label='Launches' buttonStyle='secondary' href='/launches' />
            {
                launches.map((launch, index) => {
                    const {
                        title,
                        links,
                        details,
                        event_date_utc,
                        flight_number
                    } = launch
                    const date = new Date(event_date_utc).toString().slice(0, 15)
                    const launchNumber = `${flight_number ? `Launch ${flight_number}, ` : ''}`
                    const subTitle = `${launchNumber}${date}`

                    return (
                        <HistoryCard
                            key={index}
                            title={title}
                            subTitle={subTitle}
                            details={details}
                            links={links}
                        />
                    )
                })
                    .reverse()
            }
        </>
    )
}
export default History