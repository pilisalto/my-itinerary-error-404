import { createReducer } from "@reduxjs/toolkit";
import citiesReducer from "./citiesReducer";
import hotelsReducer from "./hotelsReducer";
import myCitiesReducer from "./myCitiesReducer";
import myHotelsReducer from "./myHotelsReducer";
import myTinerariesReducer from "./myTinerariesReducer";
import myShowsReducer from "./myShowsReducer";
import usersReducer from "./usersReducer";

const rootReducer = {
    citiesReducer,
    hotelsReducer,
    myCitiesReducer,
    myHotelsReducer,
    myTinerariesReducer,
    myShowsReducer,
    usersReducer
}

export default rootReducer;