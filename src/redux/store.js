import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainSliceReducer from "./mainSlice"
import { apiSlice } from "../api/apiSlice";
import userLayoutSliceReducer from "./userLayoutSlice";
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        main:mainSliceReducer,
        userLayout:userLayoutSliceReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store;