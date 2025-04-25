import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { restaurantReducer } from "./restaurants/restaurantSlice";


export const store = configureStore({
    reducer: {
        restaurants: restaurantReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])

});