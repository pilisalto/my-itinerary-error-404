import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";


const ingresar = createAsyncThunk('ingresar', async (datos) => { //datos son el objeto que viene del formulario
    let url = `${BASE_URL}/api/auth/sign-in`
    try {
        let user = await axios.post(url,datos)
        let data = ""
        let data1 = ""
        console.log(user)
        if(user.data.success){
            data = user.data.response.user
            data1 = user.data.response.token
        }
        return {
            success: user.data.success,
            response: {message: user.data.message,data, user: data, token:data1}
        }
    } catch (error) {
        return {
            success: false,
            response: {message:error.response.data.message}
        }
    }
})

const reIngresar = createAsyncThunk('reingresar', async (token) => {
    let url = `${BASE_URL}/api/auth/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let user = await axios.post(url,null,headers)
        console.log(user.data.response)
        return {
            success: true,
            response: {
                user: user.data.response,
                token
            }
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})

const userLoginAction = {
    ingresar,
    reIngresar
}

export default userLoginAction;