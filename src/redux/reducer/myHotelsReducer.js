import { createReducer } from "@reduxjs/toolkit";
import myHotelsAction from "../actions/myHotelsAction";

const initialState= {
    loading: false, 
    hotelsFiltrados:[],
    error: false,
    id:""
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
        const deleteId = action.meta.arg
        let newState = {
            ...state,
            hotelsFiltrados: state.hotelsFiltrados.filter(e => e._id != deleteId)
        }
        return newState
    })
} )

export default myHotelsReducer; 