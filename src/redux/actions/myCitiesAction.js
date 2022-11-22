import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";


const filtrarCities = createAsyncThunk("filtrarCities", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/cities?user_id=${data1}`)
    console.log(res.data.response)
    return{
        citiesFiltrados: res.data.response
    }
    }
)

const eliminarCities = createAsyncThunk("eliminarCities", async ( idCity ) => {
    let url = `${BASE_URL}/api/cities/${idCity}`;
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
const myCitiesAction ={
    filtrarCities,
    eliminarCities
}

export default myCitiesAction;