import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.jpg'

import {
    StyledLaunchesMainImageContainer,
    StyledFilterSection,
    StyledInputContainer,
    StyledFilterByMissionInput,
    StyledFormLabel
} from './Launches.styled'

import { Button } from '../../components'
import { fetchAllLaunchesData } from '../../store/launches'
import { fetchAllRocketsData } from '../../store/rockets'
import  Typography  from '@mui/material/Typography'
import { LaunchCard } from '../../components'

const Launches = () => {
    const launches = useSelector((state) => state.launches.launches)
    const rockets = useSelector((state) => state.rockets.rockets)

    const [searchTerm, setSearchTerm] = useState('')
    const [filterDate, setFilterDate] = useState(null)

    console.log(rockets)
    console.log(launches)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllRocketsData())
        dispatch(fetchAllLaunchesData())
    })

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleDateChange = (e) => {
        setFilterDate(e.target.value)
    }
    if (rockets === null && !Array.isArray(rockets)){
        <Typography>Loading...</Typography>
    }

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
            <StyledFilterSection>
                <StyledInputContainer>
                    <StyledFormLabel>Filter by mission</StyledFormLabel>
                    <StyledFilterByMissionInput placeholder="Filter by mission" onChange={handleSearchTermChange} />
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledFormLabel>Filter by date</StyledFormLabel>
                    <StyledFilterByMissionInput type="date" onChange={handleDateChange} />
                </StyledInputContainer>
            </StyledFilterSection>
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
                    
                    const missionNameLowerCase = mission_name.toLowerCase()
                    let searchTermToLowerCase = searchTerm.toLowerCase()
                    if (searchTerm && !missionNameLowerCase.includes(searchTermToLowerCase)){
                        return
                    }

                    const selectedDate = new Date(filterDate ?? '').toString().slice(0, 15)
                    if (filterDate && launchDate !== selectedDate){
                        return
                    }
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