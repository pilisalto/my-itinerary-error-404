import { createReducer } from "@reduxjs/toolkit";
import myCitiesAction from "../actions/myCitiesAction";


const initialState = {
    loading: false,
    citiesFiltrados: [],
    error: false,
    id: ""
}

const myCitiesReducer = createReducer(initialState, (builder) => {

    builder.addCase(myCitiesAction.filtrarCities.fulfilled, (state, action) => {
        return { ...state, loading: false, citiesFiltrados: action.payload.citiesFiltrados }
    })
    builder.addCase(myCitiesAction.filtrarCities.rejected, (state, action) => {
        return { ...state, loading: false, citiesFiltrados: [] }
    })
    builder.addCase(myCitiesAction.eliminarCities.fulfilled, (state, action) => {
        //console.log(action.meta.arg)
        return { ...state, loading: false}
    })
})

export default myCitiesReducer; 