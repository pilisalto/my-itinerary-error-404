import { createReducer } from "@reduxjs/toolkit";
import reactionAction from "../actions/reactionAction";

const initialState= {
    response: [], 
    error: false,
    success: true
}

const reactionReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(reactionAction.getReaction.fulfilled, (state, action)=>{
        
        return {...state, response:action.payload.response, success:action.payload.success}
    })
    builder.addCase(reactionAction.getReaction.rejected, (state, action)=>{
        return {...state,error:true, success:false}
    })
    builder.addCase(reactionAction.postearReaction.fulfilled, (state , action)=>{
        
        let newState = {
            ...state
           // response: state.response.map(e => <>{e._id === action.payload.response._id ? (action.payload.response):(e)}</>)
        }
        return newState
    })
} )

export default reactionReducer; 