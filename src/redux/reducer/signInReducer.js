import { createReducer } from "@reduxjs/toolkit";
import signInAction from "../actions/signInAction"

let initialState = {
    name: "",
    photo: "",
    logged: false,
    token: "",
    response: ""
}

const signInReducer = createReducer(initialState, (builder) => {

    builder.addCase(signInAction.ingresar.fulfilled, (state, action) => {
        const { success, response , token} = action.payload
        if (success) {
            console.log(action.payload)
            let { user, token } = response //este token es el codigo que viene del backend
            localStorage.setItem('token', JSON.stringify({ token: { user: token } })) //este objeto token va a guardar
            //la propiedad con el nombre del tipo de token y el token que guarda
            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                token: token
            }
            return newState
        } else {
            let newState = {
                ...state,
                response: {message:action.payload.response}
            }
            return newState
        }
    })
    builder.addCase(signInAction.reIngresar.fulfilled, (state, action) => {
        const { success, response , token} = action.payload
        if (success) {
            console.log(action.payload)
            let { user, token } = response
            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                token: token
            }
            return newState
        } else {
            let newState = {
                ...state,
                response: {message:action.payload.response}
            }
            return newState
        }
    })

})

export default signInReducer


