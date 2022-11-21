import { createReducer } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducer";

const rootReducer = {
    citiesReducer,
    hotelsReducer
}

export default rootReducer;