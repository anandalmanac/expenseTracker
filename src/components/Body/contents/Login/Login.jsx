import { ArrowRight, ArrowRightAltOutlined } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { regex } from './regex'
import { app } from '../../../../store/firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import {remove_user, set_user} from '../../../../store/actions/user'

function Login() {
    let user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    //
    useEffect(()=>{
        console.log('user redux',user)
    },[user])
    const[account,setAccount]=useState(false)
    
    let _signupdata={
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
           
        
    }
    const [signupdata,setSignupdata]=useState(_signupdata)
    const[signindata,setSignindata]=useState({
        email:'',
        password:'',
    })
    const [errors,setErrors]=useState({
        usernameError:'',
        emailError:'',
        passwordError:'',
        confirmPasswordError:''
    })

    useEffect(()=>{
        const auth = getAuth();
        auth.onAuthStateChanged((user)=>{
            if(user){
                
                dispatch(set_user(user))
                


            }else{
                dispatch(remove_user())
            }
        })
    },[])



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
                const auth=getAuth()
                createUserWithEmailAndPassword(auth, signupdata.email, signupdata.password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log('user:',user)
                        setSignupdata(_signupdata)
                        setAccount(true)
                        // ...
                    })
                    .catch((err) => {
                        switch(err.code){
                    case "auth/email-already-in-use":
                        emailError=err.message;
                        setErrors({...errors,emailError})
                        
                        break;

                    case "auth/invalid-email": 
                        emailError=err.message;
                        setErrors({...errors,emailError})
                        break;
                    case "auth/weak-password":
                        passwordError=err.message;
                        setErrors({...errors,passwordError})
                        break;
                }
                            });
            }else{
                confirmPasswordError='password doesnt match'
            }
            
        
        setErrors({...errors,emailError,usernameError,passwordError,confirmPasswordError})

    }
    const validate_email=()=>{
        
    }
    const handle_signup=(e)=>{
        e.preventDefault()
        let isValid=validate()
        let confirmPasswordError=''
        console.log('validate',isValid)
        

        
            
        }
    const handle_login=(e)=>{
    e.preventDefault()
    const auth = getAuth();
    let emailError=''
    let passwordError=''
 signInWithEmailAndPassword(auth,signindata.email,signindata.password)
    .then(setErrors({...errors,emailError,passwordError}))
    .catch(err=>{
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found": 
                emailError=err.message
                setErrors({...errors,emailError});
                console.log(err.message)
                break;
            case "auth/wrong-password":
                passwordError=err.message
                setErrors({...errors,passwordError});
                console.log(err.message);
                break;
        }
    })

}
  return (
    <Container>
        <div className="wrapper">
            <h1>{account?'Log in':'Sign Up'}</h1>
            {account?
            <>
            <TextField  label="Username" variant="standard" value={signindata.email} onChange={(e)=>setSignindata({...signindata,email:e.target.value})} />
            <div className='form-errors'>{errors.emailError}</div>
            <TextField  label="Password" variant="standard" type='password' value={signindata.password} onChange={(e)=>setSignindata({...signindata,password:e.target.value})} />
            <div className='form-errors'>{errors.passwordError}</div>
            <button onClick={handle_login} >Sign in <span><ArrowRightAltOutlined /></span> </button>
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
            <button onClick={handle_signup} >Sign Up</button>
            
            
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