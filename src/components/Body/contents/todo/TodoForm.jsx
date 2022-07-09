import styled from 'styled-components'
import React from 'react'
import { CloseOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { add_project, add_todo, display_project_popup, display_todo, update_project, update_todo } from '../../../../store/actions/Todo'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import ReactDatePicker from 'react-datepicker'
import { useState,useEffect } from 'react'


function TodoForm({updateIndex}) {
    console.log('updateindex',updateIndex)
    

    


    const dispatch = useDispatch()
    const todoData = useSelector(state => state.todoData)
    const [data,setData]=useState({
        message:'',
        date:null,
        project:''
    })
    const[project,setProject]=useState('')
    useEffect(() => {

        if(todoData.display){
            if(updateIndex!==null){
            setData(todoData.data[updateIndex])
            
            console.log('abcd',todoData.data[updateIndex])
            console.log('data',data)

        }else{
            setData({
                message:'',
            date:null,
            project:''
            })
        }
        }else if(todoData.display_project){
             if(updateIndex!==null){
            setProject(todoData.projects[updateIndex])
            

        }else{
            setProject('')
        }

        }
    

    }, [updateIndex,todoData])
    const handle_addtodo=(e)=>{
        e.preventDefault()
        updateIndex!==null?dispatch(update_todo(data,updateIndex)):dispatch(add_todo(data))
        
        console.log('added data',todoData)
        dispatch(display_todo(false))
        clear_form()
    }
    const handle_addproject=(e)=>{
        e.preventDefault()
        updateIndex!==null?dispatch(update_project(project,updateIndex)):dispatch(add_project(project))
        
        setProject('')
        dispatch(display_project_popup(false))
        console.log('projects:',todoData.projects)
    }
    const handle_clear_project=(e)=>{
        e.preventDefault()
        setProject('')
        dispatch(display_project_popup(false))
    }
    const clear_form=()=>{
        setData({
            message:'',
        date:null,
        project:''
        })
        dispatch(display_todo(false))

    }
    console.log(todoData)
    return (
        <>
        {todoData.display?
        <Container>
           
            <div className="todo-form">
                 
                <button className='form-close-btn' onClick={()=>dispatch(display_todo(false))} ><CloseOutlined /></button>
            
                <form action="">
                    <TextField className='form-input' id="standard-basic" label="thing to do" variant="standard" required value={data?.message} onChange={(e)=>setData({...data,message:e.target.value})} />
                    
                    <FormControl className='form-input' fullWidth variant='standard'>
                    <InputLabel id="demo-simple-select-label">Project</InputLabel>
                    <Select
                        
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-required"
                        value={data?.project}
                        label="Project"
                        onChange={(e)=>setData({...data,project:e.target.value})}
                        
                        >
                        {todoData.projects.map((project)=>(
                            <MenuItem value={project}>{project}</MenuItem>

                        ))}
                        
                        
                    </Select>
                    </FormControl> 
                    <ReactDatePicker placeholderText='dd/mm/yyyy' className='form-input' selected={new Date(data?.date)} onChange={(date)=>setData({...data,date:date})} />
                   <div className="todo-popup-btn form-input">
                        <button onClick={clear_form}>Cancel</button>
                        <button className='add-btn'  onClick={(e)=>handle_addtodo(e)}>Add</button>
                   </div>

                </form>
            </div>
            
        </Container>:null}
        {todoData.display_project?
        <Container>
           
            <div className="todo-form">
                 
                <button className='form-close-btn' onClick={()=>dispatch(display_project_popup(false))} ><CloseOutlined /></button>
            
                <form action="">
                    <TextField className='form-input' id="standard-basic" label="Project name" variant="standard" required value={project} onChange={(e)=>setProject(e.target.value)} />
                    
                    <div className="todo-popup-btn form-input">
                        <button onClick={handle_clear_project}>Cancel</button>
                        <button className='add-btn' type='submit' onClick={(e)=>handle_addproject(e)}>Add</button>
                   </div>

                </form>
            </div>
            
        </Container>:null}
        </>
    )
}

export default TodoForm


const Container=styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: -80px;
backdrop-filter:blur(10px);



.todo-form{
    width: 500px;
    background-color: white;
    padding: 30px;
    box-shadow:0 0 32px  #50505022;
    border-radius: 4px;
    backdrop-filter:blur(20px);
    position: relative;
    form{
        display: flex;
        flex-direction: column;
        .form-input{
            margin-bottom:16px ;

        }
    }
    .form-close-btn{
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 10px;
        cursor: pointer;
    }
    .todo-popup-btn{
        display: flex;
        width: 100%;
        justify-content:flex-end;
        
        button{
        color: #048CF6;
        
        padding: 10px 30px;
        border-radius: 30px;
        outline: none;
        border: none;
        }
        .add-btn{
            background-color: #048CF6;
            color: white;
            margin-left: 10px;
        }
    }
}
`
