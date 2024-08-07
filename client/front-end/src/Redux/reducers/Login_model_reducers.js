import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginModal:false,
    loginuserData:{},
    tokenUser:localStorage.getItem("token_user")?localStorage?.getItem("token_user"):"",
    modalShow:false
}
const Login_reducer_model=createSlice({
    name:"Login Modal",
    initialState:initialState,
    reducers:{
        loginModalCheck:(state,action)=>{
            state.loginModal=action.payload
        },
        loginUserData:(state,action)=>{
            state.loginuserData=action.payload
        },
    }
});
export const {loginModalCheck,loginUserData}=Login_reducer_model.actions;
export default Login_reducer_model.reducer;