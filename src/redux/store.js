import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainSliceReducer from "./mainSlice"
import { apiSlice } from "../api/apiSlice";
import userLayoutSliceReducer from "./userLayoutSlice";
import userRoomSliceReducer from "../features/userRoomSlice";
import domPublicSliceReducer from "../features/domPublicSlice";
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        main:mainSliceReducer,
        userLayout:userLayoutSliceReducer,
        userRoom:userRoomSliceReducer,
        domPublic:domPublicSliceReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store;