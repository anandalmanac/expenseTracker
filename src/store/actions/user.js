export const set_user=(user)=>{
    return{
        type:'SET_USER',
        payload:user
    }
}
export const remove_user=()=>{
    return{
        type:'REMOVE_USER'
    }
}