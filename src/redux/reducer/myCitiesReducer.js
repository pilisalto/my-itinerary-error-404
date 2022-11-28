import { createReducer } from "@reduxjs/toolkit";
import myCitiesAction from "../actions/myCitiesAction";


const initialState = {
    loading: false,
    citiesFiltrados: [], //tengo todas las ciudades del administrador
    error: false,
    id: ""
}

const myCitiesReducer = createReducer(initialState, (builder) => {

    builder.addCase(myCitiesAction.filtrarCities.fulfilled, (state, action) => {
        console.log()
        return { ...state, loading: false, citiesFiltrados: action.payload.citiesFiltrados }
    })
    builder.addCase(myCitiesAction.filtrarCities.rejected, (state, action) => {
        return { ...state, loading: false, citiesFiltrados: [] }
    })
    builder.addCase(myCitiesAction.eliminarCities.fulfilled, (state, action) => {
        const deleteId = action.meta.arg
        let newState = {
            ...state,
            citiesFiltrados: state.citiesFiltrados.filter(e => e._id != deleteId)
        }
        return newState
    })
})

export default myCitiesReducer; 