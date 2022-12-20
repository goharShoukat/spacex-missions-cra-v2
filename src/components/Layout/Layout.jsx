import React from 'react'
import { StyledLayoutContainer } from "./Layout.styled";
import { Header } from '../Header'

export const Layout = ({ children }) => {
    return (
        <StyledLayoutContainer>
            <Header />
            <main>{children}</main>
        </StyledLayoutContainer>
    )
}