
const initValue ={
    name:"",
    email:"",
    website:""
}
export const userReducer=(state = initValue,action) =>{
    switch(action.type){
        case "GET_LIST_USER":
            return{
                ...action.payload
            }
            default:
                return state;
    }
}