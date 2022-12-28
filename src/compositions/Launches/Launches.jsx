import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.jpg'

import {
    StyledLaunchesMainImageContainer,
    StyledFilterSection,
    StyledInputContainer,
    StyledFilterByMissionInput,
    StyledFormLabel,
    StyledPayloadFilterSection,
    FormLabelText
} from './Launches.styled'

import { Button } from '../../components'
import { fetchAllLaunchesData } from '../../store/launches'
import { fetchAllRocketsData } from '../../store/rockets'
import Typography from '@mui/material/Typography'
import { LaunchCard } from '../../components'

const Launches = () => {
    const launches = useSelector((state) => state.launches.launches)
    const rockets = useSelector((state) => state.rockets.rockets)
    const payloadsWeights = useSelector((state) => state.rockets.payloadWeights)

    const [payloadOption, setPayloadOption] = useState('')
    const [payloadOrbitId, setPayloadOrbitId] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [filterDate, setFilterDate] = useState(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllRocketsData())
        dispatch(fetchAllLaunchesData())
    }, [dispatch])

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleDateChange = (e) => {
        setFilterDate(e.target.value)
    }

    const handlePayloadOptionChange = (payloadWeight) => {
        const { id, name, kg, lb, rocket_id } = payloadWeight
        const capitalisedRocketName = rocket_id.charAt(0).toUpperCase() + rocket_id.slice(1)
        const label = `${capitalisedRocketName}: ${name} (${id}) - ${kg}kg / ${lb}lb`
        setPayloadOption(label)
        setPayloadOrbitId(payloadWeight.id)
    }

    const handleClearFilters = () => {
        setSearchTerm('')
        setFilterDate(null)
        setPayloadOption('')
        setPayloadOrbitId('')
    }

    if (rockets === null && !Array.isArray(rockets)) {
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
                <img src={logo} alt="logo" />
            </StyledLaunchesMainImageContainer>
            <Button buttonStyle="secondary" label="History" href="/history" />
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
            <StyledFilterSection>
                <StyledFormLabel>{payloadOption}</StyledFormLabel>
                <Button size="small" label="Clear filters" onClick={() => handleClearFilters()} />
            </StyledFilterSection>
            <FormLabelText>
                <StyledFormLabel>Filter by Low Earth Orbit</StyledFormLabel>
            </FormLabelText>
            <StyledPayloadFilterSection>
                <br />
                <br />
                <br />
                {payloadsWeights?.filter(payload => payload.id === 'leo').map((payload, index) => {
                    const label = `${payload.kg}kg / ${payload.lb}lb`
                    return <Button size="small" key={index} label={label} onClick={() => handlePayloadOptionChange(payload)} />
                })}
            </StyledPayloadFilterSection>
            <FormLabelText>
                <StyledFormLabel>Filter by Geosynchronous Transfer Orbit</StyledFormLabel>
            </FormLabelText>
            <StyledPayloadFilterSection>
                <br />
                <br />

                {payloadsWeights?.filter(payload => payload.id === 'gto').map((payload, index) => {
                    const label = `${payload.kg}kg / ${payload.lb}lb`
                    return <Button size="small" key={index} label={label} onClick={() => handlePayloadOptionChange(payload)} />
                })}
            </StyledPayloadFilterSection>
            <FormLabelText>
                <StyledFormLabel>Filter by Mars Orbit</StyledFormLabel>
            </FormLabelText>
            <StyledPayloadFilterSection>
                <br />
                <br />
    
                {payloadsWeights?.filter(payload => payload.id === 'mars').map((payload, index) => {
                    const label = `${payload.kg}kg / ${payload.lb}lb`
                    return <Button size="small" key={index} label={label} onClick={() => handlePayloadOptionChange(payload)} />
                })}
            </StyledPayloadFilterSection>
            <FormLabelText>
                <StyledFormLabel>Filter by Moon Orbit</StyledFormLabel>
            </FormLabelText>
            <StyledPayloadFilterSection>
                <br />
                <br />
                {payloadsWeights?.filter(payload => payload.id === 'moon').map((payload, index) => {
                    const label = `${payload.kg}kg / ${payload.lb}lb`
                    return <Button size="small" key={index} label={label} onClick={() => handlePayloadOptionChange(payload)} />
                })}
            </StyledPayloadFilterSection>

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

                    //filter by mission name
                    if (searchTerm && !missionNameLowerCase.includes(searchTermToLowerCase)) {
                        return
                    }

                    //filter by date
                    const selectedDate = new Date(filterDate ?? '').toString().slice(0, 15)
                    if (filterDate && launchDate !== selectedDate) {
                        return
                    }

                    //filter by orbit id 
                    const rocketOrbitId = payloads[0].orbit.toLowerCase()
                    if (payloadOrbitId && rocketOrbitId !== payloadOrbitId) {
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