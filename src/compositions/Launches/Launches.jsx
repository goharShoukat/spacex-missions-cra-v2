import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.jpg'
import { StyledLaunchesMainImageContainer } from './Launches.styled'
import { Button } from '../../components'
import { fetchAllLaunchesData } from '../../store/launches'
import { Typography } from '@mui/material'
import { LaunchCard } from '../../components'
const Launches = () => {
    const launches = useSelector((state) => state.launches.launches)
    //console.log(launches)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllLaunchesData())
    }, [dispatch])
    if (launches === null && !Array.isArray(launches)) {
        return (
            <Typography>
                Loading...
            </Typography>
        )
    }

    return (
        <>
            <StyledLaunchesMainImageContainer>
                <img src={logo} alt='logo' />
            </StyledLaunchesMainImageContainer>
            <Button label='History' href='/history' buttonStyle='secondary' />
            {
                launches.map((launch, index) => {
                    const {
                        mission_name,
                        launch_date_utc,
                        rocket,
                        links,
                        details,
                        flight_number
                    } = launch
                    const { second_stage } = JSON.parse(JSON.stringify(rocket))
                    
                    const { payloads } = second_stage
                    const launchDate = new Date(launch_date_utc).toString().slice(0, 15)
                    return (
                        <LaunchCard
                            key={index}
                            missionName={mission_name}
                            launchNumber={flight_number}
                            payloads={payloads}
                            details={details}
                            date={launchDate}
                            links={links}
                        />
                    )


                })
            }
        </>
    )
}
export default Launches