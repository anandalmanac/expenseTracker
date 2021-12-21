const budgetFormReducer=(state=[],actions)=>{
    switch(actions.type){
        case 'SET_BUDGETFORMDATA':
            state.unshift(actions.payload)
            
            return [...state]

        case 'DELETE_BUDGETFORMDATA':
            console.log('deleting data at index:',actions.payload)
            // state.splice(actions.payload,1)
            state.splice(actions.payload,1)
            console.log('state',state)
            return [...state]

        
        case 'FILTER_BUDGETFORMDATA':
            console.log('filter reducer')
            return [...state]
            
        default:
            return state
    }
}


export default budgetFormReducer




