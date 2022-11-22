import { createReducer } from "@reduxjs/toolkit";
import myTinerariesAction from "../actions/myTinerariesAction";

const initialState= {
    loading: false, 
    tinerariesFiltrados:[],
    error: false
}

const myTinerariesReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(myTinerariesAction.filtrarTineraries.fulfilled, (state, action)=>{
        console.log(action.payload.tinerariesFiltrados)
        return {...state, loading: false, tinerariesFiltrados:action.payload.tinerariesFiltrados}
    })
    builder.addCase(myTinerariesAction.filtrarTineraries.rejected, (state, action)=>{
        return {...state, loading: false, tinerariesFiltrados:[]}
    })
    builder.addCase(myTinerariesAction.eliminarTineraries.fulfilled, (state, action)=>{
        return {...state, loading: false}
    })
} )

export default myTinerariesReducer; 