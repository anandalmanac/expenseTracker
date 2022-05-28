export const display_todo=(data)=>{
    return{
        type:'DISPLAY_TODO',
        payload:data
    }
}
export const add_todo=(data)=>{
    return {
        type:'ADD_TODO',
        payload:data
    }
}
export const update_todo=(data,index)=>{
    return{
        type:'UPDATE_TODO',
        payload:data,
        index:index

    }
}
export const update_project=(data,index)=>{
    return{
        type:'UPDATE_PROJECT',
        payload:data,
        index:index
    }
}
export const delete_todo=(index)=>{
    return{
        type:'DELETE_TODO',
        index:index

    }
}

export const add_project=(data)=>{
    return{
        type:'ADD_PROJECT',
        payload:data
    }
}
export const delete_project=(index)=>{
    return{
        type:'DELETE_PROJECT',
        index:index,
    }
}
export const display_delete_popup=(data)=>{
    return{
        type:'DISPLAY_DELETE_POPUP',
        payload:data
    }
}
export const display_project_popup=(data)=>{
    return{
        type:'DISPLAY_PROJECT_POPUP',
        payload:data
    }
}