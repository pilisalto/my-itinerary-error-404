import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentAction";

const initialState= {
    response: [], 
    error: false,
    success: true
}

const commentReducer = createReducer(initialState, (builder)=>{

    builder.addCase(commentAction.getComment.fulfilled, (state, action)=>{
        return {...state, response:action.payload.response, success:action.payload.success}
    })
    builder.addCase(commentAction.getComment.rejected, (state, action)=>{
        return {...state,error:true, success:false}
    })
} )

export default commentReducer; 