


export const updateListUser =(listUser)=>{
    return{
        type:"GET_LIST_USER",
        payload: listUser
    }
}
export const getListUser=(state)=>{
    return state.userReducer;
}