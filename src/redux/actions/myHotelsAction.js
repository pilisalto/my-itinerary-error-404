import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";


const filtrarHotels = createAsyncThunk("filtrarHotels", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/hotels?user_id=${data1}`)
    console.log(res.data.response)
    return{
        hotelsFiltrados: res.data.response
    }
    }
)

const eliminarHotels = createAsyncThunk("eliminarHotels", async ( idCity ) => {
    let url = `${BASE_URL}/api/hotels/${idCity}`;
    try {
      const res = await axios.delete(url);
      return {
        success: true,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
      };
    }
  });
const myHotelsAction ={
    filtrarHotels,
    eliminarHotels
}

export default myHotelsAction;