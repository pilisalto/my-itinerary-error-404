import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const filtrarHotels = createAsyncThunk("filtrarHotels", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/hotels?name=${data1[0]}&order=${data1[1]}`)
    return{
        hotelsFiltrados: res.data.response
    }
    
}
)
const hotelsAction = {
    filtrarHotels
}

export default hotelsAction;