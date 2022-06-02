export const UserReducer=(state={user:null},actions)=>{
    switch(actions.type){
        case 'SET_USER':
            console.log('user set',{...state,user:actions.payload})
            return {...state,user:actions.payload}
        case 'REMOVE_USER':
            return {...state,user:null}
        default :
            return state
    }

}