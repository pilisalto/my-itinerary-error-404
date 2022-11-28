import { createReducer } from "@reduxjs/toolkit";
import usersAction from "../actions/usersAction";

const initialState= {
    response: "", 
    users:[],
    error: false,
    success: true
}

const usersReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(usersAction.newUsers.fulfilled, (state, action)=>{
        return {...state, response:action.payload.response, success:action.payload.success}
    })
    builder.addCase(usersAction.newUsers.rejected, (state, action)=>{
        return {...state,error:true, success:false}
    })
} )

export default usersReducer; 