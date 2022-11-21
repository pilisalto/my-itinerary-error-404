import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction";

const initialState= {
    loading: false, 
    hotelsFiltrados:[],
    error: false
}

const HotelsReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(hotelsAction.filtrarHotels.fulfilled, (state, action)=>{
        return {...state, loading: false, ...action.payload}
    })
    builder.addCase(hotelsAction.filtrarHotels.rejected, (state, action)=>{
        return {...state, loading: false, hotelsFiltrados:[]}
    })
} )

export default HotelsReducer; 