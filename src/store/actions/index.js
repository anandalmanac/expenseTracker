export const set_budgetFormData=(data)=>{
    return{
        type:'SET_BUDGETFORMDATA',
        payload:data
    }

}
export const delete_budgetFormdata=(index)=>{
    return{
        type:'DELETE_BUDGETFORMDATA',
        payload:index
    }
}
export const filter_budgetFormdata=(filter)=>{
    return{
        type:'FILTER_BUDGETFORMDATA',
        payload:filter
    }
}

