import { createReducer } from "@reduxjs/toolkit";
import myHotelsAction from "../actions/myHotelsAction";

const initialState= {
    loading: false, 
    hotelsFiltrados:[],
    error: false
}

const myHotelsReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(myHotelsAction.filtrarHotels.fulfilled, (state, action)=>{
        console.log(action.payload.hotelsFiltrados)
        return {...state, loading: false, hotelsFiltrados:action.payload.hotelsFiltrados}
    })
    builder.addCase(myHotelsAction.filtrarHotels.rejected, (state, action)=>{
        return {...state, loading: false, hotelsFiltrados:[]}
    })
    builder.addCase(myHotelsAction.eliminarHotels.fulfilled, (state, action)=>{
        return {...state, loading: false}
    })
} )

export default myHotelsReducer; 