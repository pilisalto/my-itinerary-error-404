import { createReducer } from "@reduxjs/toolkit";
import signInAction from "../actions/signInAction"

let initialState = {
    name: "",
    photo: "",
    logged: false,
    token: "",
    response: "",
    role:""
}

const signInReducer = createReducer(initialState, (builder) => {

    builder.addCase(signInAction.ingresar.fulfilled, (state, action) => {
        const { success, response , token} = action.payload
        if (success) {
            let { user, token } = response //este token es el codigo que viene del backend
            localStorage.setItem('token', JSON.stringify({ token: { user: token } })) //este objeto token va a guardar
            //la propiedad con el nombre del tipo de token y el token que guarda
            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                token: token,
                role: user.role
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
        localStorage.removeItem('token')
        if (success) {
            let { user, token } = response
            let newState = {
                ...state,
                name: user.user.name,
                photo: user.user.photo,
                logged: true,
                token: token,
                role: user.user.role
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
    builder.addCase(signInAction.salir.fulfilled, (state, action) => {
        const { success, response , token} = action.payload
        
        if (success) {
            let { user, token } = response
            console.log(response)
            let newState = {
                ...state,
                name: "",
                photo: "",
                logged: false,
                token: "",
                role: ""
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


