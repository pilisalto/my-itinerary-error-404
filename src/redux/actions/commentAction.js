import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

let getComment = createAsyncThunk("getComment", async (data) => {
    try {
        const res = await axios.get(`${BASE_URL}/api/comments?showId=${data}`)
        return {
            success: res.data.success,
            response: res.data.response,
            message: res.data.message
        }
    
    }
    catch(error){
        console.log(error)
        return { 
            success: false,
            response: [],
            message: error.response.data
        }
    }
})

const commentAction = {
    getComment
}

export default commentAction;
