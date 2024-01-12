import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mainSliceReducer from "./mainSlice"
import { apiSlice } from "../api/apiSlice";
import userLayoutSliceReducer from "./userLayoutSlice";
import userRoomSliceReducer from "../features/userRoomSlice";
import userRoomExtraSlice from "../features/userRoomExtraSlice";
import domPublicSliceReducer from "../features/domPublicSlice";
import userDatePickerSlice from "../features/userDatePickerSlice";
const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        main:mainSliceReducer,
        userLayout:userLayoutSliceReducer,
        userRoom:userRoomSliceReducer,
        domPublic:domPublicSliceReducer,
        userRoomExtra:userRoomExtraSlice,
        userDatePicker:userDatePickerSlice
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store;