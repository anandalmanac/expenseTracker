import { ArrowRight, ArrowRightAltOutlined } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import styled from 'styled-components'
import { regex } from './regex'
import { app } from '../../../../store/firebase/firebase'

function Login() {
    const[account,setAccount]=useState(false)
    const [signupdata,setSignupdata]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
           
        
    })
    const[signindata,setSignindata]=useState({
        username:'',
        password:'',
    })
    const [errors,setErrors]=useState({
        usernameError:'',
        emailError:'',
        passwordError:'',
        confirmPasswordError:''
    })
    const validate=()=>{
        let RegEx=regex
        let emailError=''
        let usernameError=''
        let passwordError=''
        let confirmPasswordError=''
        if(regex.username.length.test(signupdata.username)){
            if(regex.username.characters.test(signupdata.username)){
                usernameError=null

            }else{
                usernameError='invalid username'

            }

        }else{
            usernameError='username should contain 5-14 caharacters'
        }
        
        
        if(regex.email.test(signupdata.email)){
           emailError=null
        }else{
            emailError='invalid email'
        }

        if(regex.password.test(signupdata.password)){
            passwordError=null
        }else{
            passwordError='password should contain minimum eight characters, at least one letter and one number and a special character'
        }

        
            
            
            if(signupdata.password===signupdata.confirmPassword){
                console.log('login successful',signupdata)
                confirmPasswordError=''
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, signupdata.email, signupdata.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log('user:',user)
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                    });
            }else{
                confirmPasswordError='password doesnt match'
            }
            
        
        setErrors({...errors,emailError,usernameError,passwordError,confirmPasswordError})

    }
    const validate_email=()=>{
        
    }
    const handle_submit=(e)=>{
        e.preventDefault()
        let isValid=validate()
        let confirmPasswordError=''
        console.log('validate',isValid)
        

        
            
        }
  return (
    <Container>
        <div className="wrapper">
            <h1>{account?'Log in':'Sign Up'}</h1>
            {account?
            <>
            <TextField  label="Username" variant="standard" value={signindata.username} onChange={(e)=>setSignindata({...signindata,username:e.target.value})} />
            <TextField  label="Password" variant="standard" type='password' />
            <button>Sign in <span><ArrowRightAltOutlined /></span> </button>
            </>
            
            :<>
            <TextField  label="Username" variant="standard" value={signupdata.username} onChange={(e)=>setSignupdata({...signupdata,username:e.target.value})} />
            <div className='form-errors'>{errors.usernameError}</div>
            <TextField  label="Email" variant="standard" value={signupdata.email} onChange={(e)=>setSignupdata({...signupdata,email:e.target.value})} />
            <div className='form-errors'>{errors.emailError}</div>
            <TextField  label="Password" variant="standard" type='password' value={signupdata.password} onChange={(e)=>setSignupdata({...signupdata,password:e.target.value})} />
            <div className='form-errors'>{errors.passwordError}</div>
            <TextField  label="Confirm Password" variant="standard" type='password' value={signupdata.confirmPassword} onChange={(e)=>setSignupdata({...signupdata,confirmPassword:e.target.value})} />
            <div className='form-errors'>{errors.confirmPasswordError}</div>
            <button onClick={handle_submit} >Sign Up</button>
            
            
            </>}
            {!account?<p>Already have an account?<a onClick={()=>setAccount(true)} >LogIn</a> </p>:<p>Don't have an account? <a onClick={()=>setAccount(false)} >SignUp</a> </p>}
            
            
        </div>
      
    </Container>
  )
}

export default Login


const Container=styled.div`
height: 100vh;

display: flex;
justify-content: center;
align-items: center;

.wrapper{
    box-shadow: 0px 0px 12px #00000014;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 400px;
    padding: 30px;
    border-radius: 8px;
    div{
        
        width: 100%;
        margin-bottom: 6px;
    }button{
        margin-top: 30px;
       background-color: #048CF6;
        color: white;
        padding: 10px 30px;
        border-radius: 4px;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
    }p{
        margin-top: 20px;
        font-size: 12px;
    }
    .form-errors{
        color:red;
        font-size:12px;
    }
}

`