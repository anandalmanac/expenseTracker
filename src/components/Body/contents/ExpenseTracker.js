import React, { useEffect } from 'react'
import { useState } from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import palette from 'google-palette'


function ExpenseTracker() {
    const [income,setIncome]=useState([])
    const [expense,setExpense]=useState([])
    const data=useSelector(state=>state.budgetFormData)
    
    useEffect(()=>{
         const _income=[]
         const _expense=[]
         data?.map((item,index)=>{
        if(item.type==='Income'){
           _income.push(item)

            

            
            console.log('income',_income)
        }
        else if (item.type==='Expense'){
            
            _expense.push(item)
            
            
            
        }
    })
    setIncome(_income)
    setExpense(_expense)
        

    },[data])


    return (
        <Container>
            {income?
            <Income>
                
             
                <div className='income-wrap'>
                    <div className="chart">
                        <Doughnut id='bar-chart' data={{
                            labels:income.map((item)=>item.category),
                            datasets:[{
                                label:'# of votes',
                                data:income.map((item)=>item.amount),
                                backgroundColor:palette('tol', income.length).map(function(hex) {
                                    return '#' + hex;}),
                                
                                
                                barThickness:20,
                                // borderRadius:9,
                                
                            }],



                        }}
                        height={400}
                        width={'100%'}
                        options={{maintainAspectRatio:false,scales:{
                            x:{
                                display: false,
                            },
                            y:{
                                display: false,
                            },
                            

                        },plugins:{
                            legend:{
                                display: true,
                                position: 'bottom',
                            }
                        }}}
                        
                        
                        />
                    </div>
                <div className="right-content">
                    <div>
                    <h2>Income</h2>
                    {income.map((item)=>(
                        
                        <p>{item.category}<span>{item.amount}/-</span></p>
                    ))}
                    <p>salary <span>300/-</span></p>
                    <p>stipend<span>300/-</span></p>
                    <p>pocket money<span>300/-</span></p>
                    </div>
                    <h3>Total:<span>1200/-</span></h3>
                    
                </div>
                </div>

            </Income>:null}

            {expense?
            <Expense>
                <div className='income-wrap'>
                    <div className="chart">
                        <Doughnut id='bar-chart' data={{
                            labels:expense.map((item)=>item.category),
                            datasets:[{
                                label:'# of votes',
                                data:expense.map((item)=>item.amount),
                                backgroundColor:palette('tol', expense.length).map(function(hex) {
                                    return '#' + hex;}),
                                
                                
                                barThickness:20,
                                // borderRadius:9,
                                
                            }],



                        }}
                        height={400}
                        width={'100%'}
                        options={{maintainAspectRatio:false,scales:{
                            x:{
                                display: false,
                            },
                            y:{
                                display: false,
                            },
                            

                        },plugins:{
                            legend:{
                                display: true,
                                position: 'bottom',
                            }
                        }}}
                        
                        
                        />
                    </div>
                <div className="right-content">
                    <div>
                    <h2>Expense</h2>
                    {expense.map((item)=>(
                        
                        <p>{item.category}<span>{item.amount}/-</span></p>
                    ))}
                    <p>salary <span>300/-</span></p>
                    <p>stipend<span>300/-</span></p>
                    <p>pocket money<span>300/-</span></p>
                    </div>
                    <h3>Total:<span>1200/-</span></h3>
                    
                </div>
                </div>


            </Expense>:null}
            
        </Container>
    )
}

export default ExpenseTracker


const Container=styled.div`
padding-top: 120px;
margin: 0 40px;
`
const Income=styled.div`
.income-wrap{
    display: flex;

    .right-content{
        background-color: white;
        flex: .5;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2{
            color: #005500;
            padding-bottom: 10px;
            border-bottom: 1px solid #666666;
        }
        p{
            margin-top: 10px;
            font-size: 16px;
            display: flex;
            width: 100%;
            justify-content: space-between;
        }h3{
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
        }
    }
    .chart{
        flex: .5;
    }
}


`


const Expense=styled.div`
width: 100%;
margin: 130px 0;

.income-wrap{

    display: flex;
    flex-direction: row-reverse;

    .right-content{
        background-color: white;
        flex: .5;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2{
            color: #005500;
            padding-bottom: 10px;
            border-bottom: 1px solid #666666;
        }
        p{
            margin-top: 10px;
            font-size: 16px;
            display: flex;
            width: 100%;
            justify-content: space-between;
        }h3{
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
        }
    }
    .chart{
        flex: .5;
    }
}`