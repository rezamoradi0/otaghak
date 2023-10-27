import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainSliceReducer from "./mainSlice"
import { apiSlice } from "../api/apiSlice";
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        main:mainSliceReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store;