
import { AssessmentOutlined, AttachMoney, NoteAdd, NotificationsActiveOutlined, Person } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Dashboard() {
    return (
        <Container>
            
            <Link  to="/"><Person /> My Profile</Link>
            <Link to="/"><NoteAdd /> TODO</Link>
            <Link to="/expense-tracker"><AssessmentOutlined/>Expense Tracker</Link>
            <Link to="/budget"><AttachMoney/>Budget</Link>
            <a href=""><NotificationsActiveOutlined /> Notifications</a>
        </Container>
    )
}

export default Dashboard

const Container=styled.div`
background-color: #048CF6;
width: 350px;
 
margin-top: 70px;
display: flex;
flex-direction: column;
max-width: 400px;
padding: 20px;
position: sticky;

a{
    color: white;
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 18px;
    transition: all .2s ease-in-out;
    border-bottom: 1px solid rgba(0,0,0,0);
    &:hover{
        padding-left: 10px;
        border-bottom: 1px solid white;
    }
   

    svg{
        padding-right: 10px;
    }
}
`