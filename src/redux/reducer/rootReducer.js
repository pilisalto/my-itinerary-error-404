import { createReducer } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";
import myTinerariesReducer from "./myTinerariesReducer";

const rootReducer = {
    citiesReducer,
    hotelsReducer,
    myCitiesReducer,
    myHotelsReducer,
    myTinerariesReducer
}

export default rootReducer;