const todoFormReducer=(state={display:false,data:[],projects:['All'],display_delete:false,display_project:false},actions)=>{
    switch(actions.type){
        case 'DISPLAY_TODO':
            return {...state,display:actions.payload}

        case 'ADD_TODO':
            return {...state,data:[...state.data,actions.payload]}

        case 'UPDATE_TODO':
            state.data[actions.index]=actions.payload
            return {...state}
        case 'UPDATE_PROJECT':
            state.projects[actions.index]=actions.payload
            
            return {...state}

        case 'DELETE_TODO':
            state.data.splice(actions.index,1)
            return{...state}

        case 'ADD_PROJECT':
            return {...state,projects:[...state.projects,actions.payload]}
        case 'DELETE_PROJECT':
            let _project=state.projects[actions.index]
            state.projects.splice(actions.index,1)
            let _data=state.data.filter(item=>item.project!==_project)
     
            return {...state,data:_data}

            
        case 'DISPLAY_DELETE_POPUP':
            return {...state,display_delete:actions.payload}

        case 'DISPLAY_PROJECT_POPUP':
            return {...state,display_project:actions.payload}
        default:
            return state
    }
}

export default todoFormReducer