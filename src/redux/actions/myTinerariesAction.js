import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";


const filtrarTineraries = createAsyncThunk("filtrarTineraries", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/itineraries?user_id=${data1}`)
    console.log(res.data.data)
    return{
        tinerariesFiltrados: res.data.data
    }
    }
)

const eliminarTineraries = createAsyncThunk("eliminarTineraries", async ( idCity ) => {
    let url = `${BASE_URL}/api/itineraries/${idCity}`;
    try {
      const res = await axios.delete(url);
      return {
        success: true,
        id:idCity
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
      };
    }
  });
const myTinerariesAction ={
    filtrarTineraries,
    eliminarTineraries
}

export default myTinerariesAction;