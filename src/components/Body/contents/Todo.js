import styled from 'styled-components'
import React,{useEffect,useState} from 'react'
import { AddOutlined, Delete, Edit, EditAttributesOutlined, SettingsAccessibilityOutlined } from '@mui/icons-material'

function Todo() {
    const [checked, setChecked] = useState(false)


    useEffect(() => {
       

        
    }, [])
    const handleCheckbox=()=>{
             document.querySelectorAll('.todo-checkbox').forEach(item=>{
            item.checked==true?console.log('input',item):console.log('input not checked',item)
        })

    }

    return (
        <>
        <Container>
            <TodoHeader>
                <h1>Things To Do</h1>
                <SettingsAccessibilityOutlined />

            </TodoHeader>
            <TodoItems>
                <div className="todos" onClick={handleCheckbox}>
                    <div className="todo">
                        <div className="todo-content">
                            <input className='todo-checkbox' type="checkbox" />
                            <p>complete first chapter</p>
                        </div>
                        <div className="todo-btns">
                             <button><Edit /></button>
                            <button><Delete /></button>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="todo-content">
                            <input className='todo-checkbox' type="checkbox" />
                            <p>complete first chapter</p>
                        </div>
                        <div className="todo-btns">
                             <button><Edit /></button>
                            <button><Delete /></button>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="todo-content">
                            <input className='todo-checkbox' type="checkbox" />
                            <p>complete first chapter</p>
                        </div>
                        <div className="todo-btns">
                             <button><Edit /></button>
                            <button><Delete /></button>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="todo-content">
                            <input className='todo-checkbox' type="checkbox" />
                            <p>complete first chapter complete first chapter complete first chapter complete first chapter complete first chaptercomplete first chapter complete first chapter</p>
                        </div>
                        <div className="todo-btns">
                             <button><Edit /></button>
                            <button><Delete /></button>
                        </div>
                    </div>
                    <div className="todo">
                        <div className="todo-content">
                            <input className='todo-checkbox' type="checkbox" />
                            <p>complete first chapter</p>
                        </div>
                        <div className="todo-btns">
                            <button><Edit /></button>
                            <button><Delete /></button>
                        </div>
                    </div>

                </div>
                <div className="projects">
                    <div className="projects-header">
                        <h3>Projects</h3>
                        <AddOutlined />
                    </div>


                </div>

            </TodoItems>
            
        </Container>
        <AddTodoBtn />
        </>
        
    )
}

export default Todo


const Container=styled.div`
margin-top: 80px;


`
const TodoHeader=styled.div`
display: flex;
align-items: center;
justify-content: center;

position: relative;
h1{
    font-size: 24px;
    
}

svg{
    position: absolute;
    right: 10px;
}


`

const TodoItems=styled.div`
display: flex;
margin: 10px;



.todos{
    width: 100%;
    flex:1;
    margin-right: 10px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;


    .todo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid whitesmoke;


        .todo-content{
            flex: .7;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            
            
            input{
                flex: .1;
               
                
                box-sizing: border-box;
                
                height: 16px;
                width: 16px;
            }
            p{
                flex: .9;
            }
        }
        .todo-btns{
            flex: .3;
            display: flex;
            justify-content: flex-end;
            button{
                margin: 3px;
                background-color: transparent;
                outline: none;
                border: none;
                svg{
                    font-size: 18px;
                    color: gray;
                }

            }
        }

    }
}



.projects{
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 12px;

    .projects-header{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
}


`


const AddTodoBtn=styled.div`
position: absolute;
background-color: red;
height: 60px;
width: 60px;
border-radius: 100%;
bottom: 0;
right: 0;
`