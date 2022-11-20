import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction";

const initialState = {
    listaCities: [],
    loading: false, 
    citiesFiltrados:[],
    error: false
}

const citiesReducer = createReducer(initialState, (builder)=>{
    builder.addCase(citiesAction.getCities.fulfilled, (state, action)=>{
        return {...state, loading: false, ...action.payload}
    }) 
    builder.addCase(citiesAction.getCities.pending, (state, action)=>{
        return {...state, loading: true}
    })
    builder.addCase(citiesAction.getCities.rejected, (state, action)=>{
        return {...state, loading: false, error: true}
    })
    builder.addCase(citiesAction.filtrarCities.fulfilled, (state, action)=>{
        return {...state, loading: false, ...action.payload}
    })
} )

export default citiesReducer; 