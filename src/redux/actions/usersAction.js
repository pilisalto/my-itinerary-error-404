import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const newUsers = createAsyncThunk("newUsers", async (data) => {
    try {
        const res = await axios.post(`${BASE_URL}/api/auth/sign-up`, data)
        return {
            success: res.data.success,
            response: res.data.message
        }
    
    }
    catch(error){
        console.log(error)
        return { 
            success: false,
            response: error.response.data.message
        }
    }
})



const usersAction = {
    newUsers
}

export default usersAction;