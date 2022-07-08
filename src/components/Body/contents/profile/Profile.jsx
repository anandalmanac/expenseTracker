import { Edit } from '@mui/icons-material'
import { Avatar, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Profile() {
  return (
    <Container>
      <h3>Profile</h3>
      <Avatar className='avatar' />
      <h4>Anand K <Edit /></h4>
      <div className="upcoming">
        <h4>Upcoming</h4>
        <div className="item">
          <p>Complete Assignment</p>
          <p>02/07/2000</p>
        </div>
        <div className="item">
          <p>Complete Assignment</p>
          <p>02/07/2000</p>
        </div>
        <Link to='/todo'>more</Link>
      </div>

      <div className="budget-overview upcoming">
        <h4>Budget Overview <span>
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={10}
    label="Age"
    onChange={()=>alert('a')}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
          
          
          </span></h4>
        <div className="item">
          <p>Income</p>
          <p>4000</p>
        </div>
        <div className="item">
          <p>Expense</p>
          <p>6000</p>
        </div>
        <Link to='/todo'>more</Link>
      </div>
      
      
    </Container>
  )
}

export default Profile


const Container=styled.div`

margin: auto;
padding: 50px;

max-width: 700px;
padding-top: 70px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.avatar{
  height: 100px;
  width: 100px;
}
h3{
  color:  #048CF6;
  font-size: 20px;
  margin: 16px 0;
}
h4{
  display: flex;
  align-items: center;

  position: relative;
  padding-bottom: 6px;
  border-bottom: 1px solid gray;
  
  svg{
    position: absolute;
    font-size: 16px;
    right: -20px;
    color: gray;
  }
}
.upcoming{
  width: 100%;
  margin-top: 50px;
  .item{
    display: flex;
    justify-content: space-between;
    p{
      margin-top: 10px;
    }
  }
}
`