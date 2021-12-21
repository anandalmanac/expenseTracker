import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { AttachMoney, Category, DeleteOutlined, Filter, MicOutlined, SettingsAccessibilityOutlined } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { delete_budgetFormdata, filter_budgetFormdata, set_budgetFormData } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import Popup from '../../Popup'



function Budget() {
    const[filterDisplay,setFilterDisplay]=useState(false)
    const [filter,setFilter]=useState({
        date:'All',
        type:'All'
    })
    const [filteredData,setFilteredData]=useState(null)
    const [startDate,setStartDate]=useState(new Date())
    const [cata,setCata]=useState()
    const [amount,setAmount]=useState()
    const[type,setType]=useState()
    const [dlt_index,setDlt_index]=useState(null)
    const[popupData,setPopupData]=useState({
        display:false,
        text:''
    })



    const formdata = useSelector(state=>state.budgetFormData)
    const dispatch = useDispatch()
    const [_formdata,set_formdata]=useState({})



    useEffect(()=>{
       console.log('formdata',formdata)

        setType(document.querySelector('#typeselect').value);
        set_formdata({
            type:type,
            category:cata,
            amount:amount,
            date:startDate 
        })
        

    },[type,cata,amount,startDate])


    const handleForm=()=>{

        if(_formdata.category===undefined || _formdata.amount===undefined||_formdata.category==='' || _formdata.amount<=0){
            console.log('required')
            setPopupData({
                display:true,
                text:'Category and amount required'
            })
            closePopup()

        }else{
            console.log('_formdata',_formdata)
            dispatch(set_budgetFormData(_formdata))
            setPopupData({
                display:true,
                text:'Data added'
            })
            closePopup()
        }
        
        
        
        

    }
    const handleDelete=(index)=>{
        setPopupData({
            display: true,
            text:'deleting data',
            delete:true

        })
        // closePopup()
        //dispatch(delete_budgetFormdata(index))
        setDlt_index(index)

    }
    const closePopup=()=>{
        setTimeout(() => {
            setPopupData({
                display: false,
                text:''
            })
            console.log(popupData)
            
        }, 500);

    }
    const DeletePopup=()=>{
        
        return(
        <PopupContainer>
        <div className='popup-content popup-dlt'>
               
               
              <div>
                <h3>Data cannot be restored once you delete</h3>
              <p>Do you want to continue?</p> 
              </div>
              <div className="delete-popup-btn">
                <button onClick={closePopup}>Cancel</button>
                <button className='delete-btn' onClick={()=>{
                    dispatch(delete_budgetFormdata(dlt_index))
                    closePopup()
                    }} >Delete</button>
              </div>
          </div>

      </PopupContainer>)
    }

    //filter display 
    useEffect(()=>{
        !filterDisplay?document.querySelector('.filter-popup').style.display='none':document.querySelector('.filter-popup').style.display='unset'

    },[filterDisplay])
    
    //filter
    const handle_filter=()=>{
        let _filteredData=[]
       formdata.map((item)=>(
           console.log(item,'item')
           //filter function here
       ))

    }

    return (
        <Container>
            <Popup data={popupData} />
            {popupData.delete?DeletePopup():null}
            <Card>
                <div className="left">
                    <div className="input-field">
                        <p>Type</p>
                        <select name="" id="typeselect">
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <p>Category</p>
                        <input type="text" value={cata} onChange={(e)=>setCata(e.target.value)} />
                      
                    </div>
                    <div className="input-field">
                        <p>Amount</p>
                        <input type="number" required value={amount} onChange={(e)=>setAmount(Number(e.target.value))} />
                    </div>
                    <div className="input-field">
                        <p>Date</p>
                         <DatePicker selected={startDate} onChange={(date)=>setStartDate(date)} />

                    </div>
                </div>
                <div className="right">
                    <MicOutlined />
                </div>
            </Card>
            <button className='create-btn' onClick={handleForm} >CREATE</button>
            <div className="items">
                <div className="filter-container" onClick={()=>setFilterDisplay(!filterDisplay)}>
                    <SettingsAccessibilityOutlined />
                </div>
                <FilterPopup className='filter-popup'>
                    <select name="" id="" onChange={(e)=>setFilter({...filter,date:e.target.value})}>
                        <option value="All">All</option>
                        <option value="This Month">This Month</option>
                        <option value="This Week">This week</option>
                    </select>
                    <select name="" id="" onChange={(e)=>setFilter({...filter,type:e.target.value})}>
                    <option value="All">All</option>
                    <option name="" id="" value="Expense">Expense</option>
                    <option name="" id="" value="Income">Income</option>

                    </select>

                    <div className='filter-btn'>
                        <button onClick={()=>setFilterDisplay(false)}>Cancel</button>
                        <button className='ok-btn' onClick={handle_filter}>Ok</button>
                    </div>
                    

                </FilterPopup>
                {formdata.map((item,index)=>(
                    <div className='item'>
                    <div className="left">
                        <AttachMoney />
                        <div>
                            
                            <h3>{item.category}</h3>
                            <p>{item.amount}$-{String(item.date.toDateString())}</p>
                        </div>
                    </div>
                    <button onClick={()=>handleDelete(index)} ><DeleteOutlined /></button>
                </div>
                ))}
                <div className='item'>
                    <div className="left">
                        <AttachMoney />
                        <div>
                            <h3>Travel</h3>
                            <p>50$-20/10/2021</p>
                        </div>
                    </div>
                    <button><DeleteOutlined /></button>
                </div>
                <div className='item'>
                    <div className="left">
                        <AttachMoney />
                        <div>
                            <h3>Travel</h3>
                            <p>50$-20/10/2021</p>
                        </div>
                    </div>
                    <button><DeleteOutlined /></button>
                </div>
                <div className='item'>
                    <div className="left">
                        <AttachMoney />
                        <div>
                            <h3>Travel</h3>
                            <p>50$-20/10/2021</p>
                        </div>
                    </div>
                    <button><DeleteOutlined /></button>
                </div>
            </div>
                   </Container>
    )
}

export default Budget


const Container=styled.div`
padding-top: 100px;
display: flex;
flex-direction: column;
align-items: center;


.create-btn{
    background-color: #048CF6;
    width: 80%;
    outline: none;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
    color: white;
}

.items{
    margin-top: 70px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    background-color: white;
    position:relative;
    .filter-container{
        position:absolute;
        right:0;
        top:-35px;
        cursor: pointer;
    }



    .item{
        background-color: white;
        display: flex;
        width: 90%;
        justify-content: space-between;
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid gray;
        .left{
            display: flex;
            align-items: center;
        }
        p{
            font-size: 13px;
        }button{
            border: none;
            outline: none;
            background-color: transparent;
        }
    }
}
`
const Card=styled.div`
background-color: white;
width: 80%;
display: flex;
padding: 40px;
min-height: 400px;
box-sizing: border-box;
border-radius: 4px;


.left{
    flex: .5;
    .react-datepicker__triangle::after{
        
            border-bottom-color:  #048CF6;

        
    }
    .react-datepicker__header {
        background-color:  #048CF6;
        *{
            color:white;
        }
    }





    
    .input-field{
        display: flex;
        padding-bottom: 40px;
        p{
            width: 150px;
        }
        input{
            width: 100%;
            outline: none;
            border: none;
            border-bottom: 1px solid gray;
        }
        select{
            outline: none;
            width: 100%;
            border: none;
            border-bottom: 1px solid gray;
            
        
            option{
            
            }
        }
    }
}
.right{
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex:.5;
    border-left: 1px solid gray;
}

`
const FilterPopup=styled.div`
position:absolute;
right:10px;
top: -10px;
background-color:white;
padding: 10px;
box-shadow:0 0 10px rgba(0,0,0,.3);
border-radius: 4px;
select{
    outline: none;
    border: none;
    margin: 10px;
}
.filter-btn{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .ok-btn{
        margin-left: 6px;
    }
}
.filter-btn button{
    background-color: transparent;
    border: 1px solid green;
    padding: 5px 10px;
    border-radius: 4px;
    width: 80px;
    cursor: pointer;
}

`



const PopupContainer=styled.div`
display: ${props=>props.display?'unset':'none'};
position: fixed;

top: 0;
left: 0;
right: 0;
bottom: 0;
z-index:100;
display: flex;
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