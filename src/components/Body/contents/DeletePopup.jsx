import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { delete_todo, display_delete_popup } from "../../../store/actions/Todo"


const DeletePopup=({index})=>{
  console.log('index',index)
    
    const dispatch=useDispatch()
    
        return(
        <Container>
        <div className='popup-content popup-dlt'>
               
               
              <div>
                <h3>Data cannot be restored once you delete</h3>
              <p>Do you want to continue?</p> 
              </div>
              <div className="delete-popup-btn">
                <button onClick={()=>dispatch(display_delete_popup(false))}>Cancel</button>
                <button className='delete-btn' onClick={()=>{
                    dispatch(delete_todo(index))
                    dispatch(display_delete_popup(false))

                   
                   
                    }} >Delete</button>
              </div>
          </div>

      </Container>)
    }
export default DeletePopup


const Container=styled.div`
display:flex;
position: fixed;

top: 0;
left: 0;
right: 0;
bottom: 0;
z-index:100;

justify-content: center;
align-items: center;
backdrop-filter:blur(20px);


.popup-content{
    height: 100px;
    width: 400px;
    background-color: white;
    box-shadow: 0 0 10px #e4e4e4;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    h3{
      font-size: 14px;
    }

}
.popup-dlt{
  height: 200px;
  flex-direction: column;

  .delete-popup-btn{
    margin-top: 40px;
    button{
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #048CF6;
      outline: none;
      padding: 6px 16px;
      color:#048CF6 ;
      border-radius: 2px;

    }
    .delete-btn{
      background-color: #048CF6;
      color: white;
      margin-left: 20px;
    }
  }

}
.loader {
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin-right: 10px;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`