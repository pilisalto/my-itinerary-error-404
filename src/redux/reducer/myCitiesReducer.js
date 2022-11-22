import { createReducer } from "@reduxjs/toolkit";
import myCitiesAction from "../actions/myCitiesAction";

const initialState= {
    loading: false, 
    citiesFiltrados:[],
    error: false
}

const myCitiesReducer = createReducer(initialState, (builder)=>{
  
    builder.addCase(myCitiesAction.filtrarCities.fulfilled, (state, action)=>{
        console.log(action.payload.citiesFiltrados)
        return {...state, loading: false, citiesFiltrados:action.payload.citiesFiltrados}
    })
    builder.addCase(myCitiesAction.filtrarCities.rejected, (state, action)=>{
        return {...state, loading: false, citiesFiltrados:[]}
    })
    builder.addCase(myCitiesAction.eliminarCities.fulfilled, (state, action)=>{
        return {...state, loading: false}
    })
} )

export default myCitiesReducer; 