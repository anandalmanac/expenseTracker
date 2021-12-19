import React from 'react'
import styled from 'styled-components'
import ExpenseTracker from './contents/ExpenseTracker'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Todo from './contents/Todo';
import Budget from './contents/Budget';



function Contents() {
    return (
        <Container>
            <Routes>
                <Route path='/budget' element={<Budget />} />
                <Route path='/expense-tracker' element={<ExpenseTracker />} />
                <Route path='/' element={<Todo />} />

            
            </Routes>
            
        </Container>
    )
}

export default Contents

const Container=styled.div`
width: 100%;
height: 100vh;
overflow-y: scroll;

background-color: #F8F8F8;

`