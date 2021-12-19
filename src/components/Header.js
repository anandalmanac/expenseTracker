import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
           <div className="left-header">
               <h1>TrackMe</h1>
           </div>
           <div className="right-header">
               <a href="">LogIn</a>
               <a href="" className='signup'>SignUp</a>
           </div>
        </Container>
    )
}

export default Header


const Container=styled.div`
height: 70px;
padding: 16px 30px;
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;

position: fixed;
box-shadow:0px 1px 16px rgba(0,0,0,.3);
color: #048CF6;
z-index:10;

h1{
    margin: 0;
    cursor: pointer;
    
}

.right-header{
    a{
        color: #048CF6;
        margin-left: 20px;
    }
    .signup{
        background-color: #048CF6;
        color: white;
        padding: 10px 30px;
        border-radius: 30px;

    }
}

`