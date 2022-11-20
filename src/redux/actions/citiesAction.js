import { createAction , createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const getCities = createAsyncThunk("getCities",async ()=>{
    const res = await axios.get(`${BASE_URL}/api/cities`)
    return {
            listaCities: res.data.response 
    }
})

const filtrarCities = createAsyncThunk("filtrarCities", async (data1)=>{
    const res = await axios.get(`${BASE_URL}/api/cities?name=${data1[0]}&continent=${data1[1]}`)
    return{
        citiesFiltrados: res.data.response
    }
}
)

const citiesAction ={
    getCities, 
    filtrarCities
}

export default citiesAction;