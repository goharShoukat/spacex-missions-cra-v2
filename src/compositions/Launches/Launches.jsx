import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.jpg'
import { StyledLaunchesMainImageContainer } from './Launches.styled'
import { Button } from '../../components'
import { fetchAllLaunchesData } from '../../store/launches'
import { Typography } from '@mui/material'
const Launches = () => {
    const launches = useSelector((state) => state.launches.launches)
    console.log(launches)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllLaunchesData())
    }, [dispatch])
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