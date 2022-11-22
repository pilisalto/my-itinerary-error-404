import { createReducer } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";

const rootReducer = {
    citiesReducer,
    hotelsReducer,
    myCitiesReducer,
    myHotelsReducer
}

export default rootReducer;