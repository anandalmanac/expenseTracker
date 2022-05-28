import React from 'react'
import Dashboard from './Body/Dashboard'
import Contents from './Body/Contents'
import styled from 'styled-components'

function Body() {
    return (
        <Container>
            <Dashboard />
            <Contents />
        </Container>
    )
}

export default Body


const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;



`