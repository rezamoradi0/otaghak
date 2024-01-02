import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADDRESS, API_ADDRESS_ROOMS } from "../constant/address";

const InitialState = {
    isLoading: true,
    data: null,
    errorMessage: null,
  };

  
//==========================================
export const fetchRoom = createAsyncThunk(
    "userRoomExtra/fetchRoom",
    async (roomId) => {
      const result = await axios
        .get(`${API_ADDRESS}/${API_ADDRESS_ROOMS}/${roomId}`)
        .then((response) => response.data)
        .catch((err) => {
          return { error: true, text: err.message };
        });
      return result;
    }
  );
  //==========================================

  const userRoomExtraSlice = createSlice({
    name: "userRoomExtra",
    initialState: InitialState,
    extraReducers: {
      [fetchRoom.pending]: (state) => {
        state.isLoading = true;
      },
      [fetchRoom.fulfilled]: (state, action) => {
        if (action.payload.error) {
          state.errorMessage=action.payload.error.text;
        } else {
            console.log(action.payload);
          state.data = action.payload;
          state.errorMessage=null;
        }
      },
    },
  });

  
export default userRoomExtraSlice.reducer;