import { createReducer } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducer";
import myCitiesReducer from "./myCitiesReducer";

const rootReducer = {
    citiesReducer,
    hotelsReducer,
    myCitiesReducer
}

export default rootReducer;