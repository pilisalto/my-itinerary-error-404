import { createReducer } from "@reduxjs/toolkit";
import myTinerariesAction from "../actions/myTinerariesAction";

const initialState= {
    loading: false, 
    tinerariesFiltrados:[],
    error: false
}

const myTinerariesReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(myTinerariesAction.filtrarTineraries.fulfilled, (state, action)=>{
        return {...state, loading: false, tinerariesFiltrados:action.payload.tinerariesFiltrados}
    })
    builder.addCase(myTinerariesAction.filtrarTineraries.rejected, (state, action)=>{
        return {...state, loading: false, tinerariesFiltrados:[]}
    })
    builder.addCase(myTinerariesAction.eliminarTineraries.fulfilled, (state, action)=>{
        const deleteId = action.meta.arg
        let newState = {
            ...state,
            tinerariesFiltrados: state.tinerariesFiltrados.filter(e => e._id != deleteId)
        }
        return newState
    })
} )

export default myTinerariesReducer; 