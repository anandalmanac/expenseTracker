import styled from 'styled-components'
import React,{useEffect,useState} from 'react'
import { AddOutlined, Delete, Edit, EditAttributesOutlined, MoreOutlined, MoreVertOutlined, SettingsAccessibilityOutlined } from '@mui/icons-material'
import TodoForm from './TodoForm'
import { useDispatch, useSelector } from 'react-redux'
import { delete_project, delete_todo, display_delete_popup, display_project_popup, display_todo } from '../../../../store/actions/Todo'
import DeletePopup from '../DeletePopup'

function Todo() {
    const [updateCheckbox, setUpdateCheckbox] = useState(false)
    const dispatch = useDispatch()
    const todoData=useSelector(state=>state.todoData)
    const [updateIndex,setUpdateIndex]=useState(null)
    const[update,setUpdate]=useState(false)
    const[deleteIndex,setDeleteIndex]=useState(null)
    const[selectedItems,setSelectedItems]=useState([])
    const[displayOptions,setDisplayOptions]=useState(false)
    


     useEffect(() => {
         console.log('selected items changed',selectedItems)
       
     }, [selectedItems])

    const handle_checkbox=(e,index)=>{
        if(document.querySelectorAll('.todo-checkbox')[index].checked){
            setSelectedItems([...selectedItems,todoData.data[index]])
        }
        else{
            let _data=selectedItems
            _data.forEach((_item,i)=>{
                console.log('index',index,_item,todoData.data[index])
                if(_item===todoData.data[index]){
                    _data.splice(i,1)
                }
            })
            
            setSelectedItems([..._data])
            console.log('deleted data',selectedItems)
        }

        
    }

    const reset_selected_items=()=>{
        setSelectedItems([])
        console.log('selected items reset')
        }
    const handle_addtodo=()=>{
        
        setUpdate(false)
        dispatch(display_todo(true))
    }
    const handle_edit=(index)=>{
        console.log('index:',index)
        dispatch(display_todo(true))
        setUpdate(true)
        setUpdateIndex(index)
        

    }
    const handle_delete_items=()=>{
        console.log('deleting items:',selectedItems)
        selectedItems.forEach((selected)=>{
            let _index=todoData.data.indexOf(selected)
            dispatch(delete_todo(_index))
            setSelectedItems([])
            document.querySelectorAll('.todo-checkbox').forEach(item=>{
                item.checked=false;
            })

        })
        
        
    }
    const handle_select_all=()=>{
        document.querySelectorAll('.todo-checkbox').forEach(item=>{
                item.checked=true
            })
            setSelectedItems([...todoData.data])
        console.log(selectedItems)

    }
    const edit_project=()=>{
        console.log('clicked')
        dispatch(display_project_popup(true))
        
        setUpdate(true)
        setDisplayOptions(false)

        
    }
    const handle_delete_project=()=>{
        dispatch(delete_project(updateIndex))
        setDisplayOptions(false)
        setUpdate(false)

    }

   
        


    return (
        <>
        <Container>
            <TodoHeader>
                {selectedItems.length>0?
                <div className='left-header'>
                    <button onClick={handle_select_all} >Select All</button>
                    <button className='delete' onClick={handle_delete_items} >Delete</button>
                    
                </div>:<div></div>
                }
                <h1>Things To Do</h1>
                <SettingsAccessibilityOutlined />

            </TodoHeader>
            <TodoItems>
                <div className="todos">
                    
                    
                    
                    
                    {todoData?.data.map((item,index)=>(
                        <div className="todo">
                        <div className="todo-content">
                            <input className='todo-checkbox' type="checkbox" onChange={(e)=>handle_checkbox(e,index)}  />
                            <p>{item.message}</p>
                        </div>
                        <div className="todo-btns">
                            <button><Edit onClick={()=>handle_edit(index)} /></button>
                            <button><Delete onClick={()=>{
                                dispatch(display_delete_popup(true))
                                setDeleteIndex(index)
                                }}/></button>
                        </div>
                    </div>
                    ))}

                </div>
                <div className="projects">
                    <div className="projects-header">
                        <h3>Projects</h3>
                        <AddOutlined onClick={()=>{
                            setUpdate(false)
                            dispatch(display_project_popup(true))}
                            } />
                    </div>
                    {todoData?.projects?.map((project_name,index)=>(
                        <div className="project">
                        <p>{project_name}</p>
                        {
                            index>0?
                            <MoreVertOutlined className='project_edit_icon' onClick={()=>{
                            setDisplayOptions(!displayOptions)
                            setUpdateIndex(index)
                            }} />:<></>
                        }
                            {
                                updateIndex===index&&displayOptions?
                                <div className="edit_project_popup" >
                            <button onClick={()=>edit_project()}  >Edit</button>
                            <button onClick={handle_delete_project} >Delete</button>
                           </div>:<></>
                            }
                        
                    </div>
                    ))

                    }


                </div>

            </TodoItems>
            <TodoForm updateIndex={update?updateIndex:null} />
            {todoData.display_delete?<DeletePopup index={deleteIndex} />:null}
            
        </Container>
        <AddTodoBtn onClick={handle_addtodo} >
            <AddOutlined />
        </AddTodoBtn >
        
        </>
        
    )
}

export default Todo


const Container=styled.div`
margin-top: 80px;
position: relative;


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
.left-header{
      position: absolute;
    left: 10px;
    button{
        margin-right: 10px;
        background-color: transparent;
        outline: none;
        border: 1px solid gray;
        
        
        border-radius: 4px;
        padding: 6px 10px;
    }
    .delete{
        color: #ff0800;
        border: 1px solid red;
    }
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
                word-break: break-all;
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
                cursor: pointer;
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
    padding: 10px;

    .projects-header{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .project{
        display: flex;
        justify-content: space-between;
        position: relative;
        
    }
    .project_edit_icon{
        
    }
    .edit_project_popup{
        z-index: 2;
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 16px;
        top: 10px;
        padding: 16px;
        background-color: white;
        box-shadow: 0 0 10px #e4e4e4;
        button{
            background-color: transparent;
            outline: none;
            border: none;
            text-align: left;
            padding: 3px 10px;
        }
    }
}


`


const AddTodoBtn=styled.div`
position: absolute;
background-color: #048CF6;
height: 60px;
width: 60px;
border-radius: 100%;
bottom: 10px;
right: 10px;
color: white;

display: flex;
align-items: center;
justify-content: center;
`