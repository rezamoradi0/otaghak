import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADDRESS } from "../constant/address";

export const fetchMain = createAsyncThunk("main/fetchMain", async () => {
  const response = await axios
    .get(API_ADDRESS + "/mainInfo")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error: true, text: error.message };
    });
  return response;
});

const myInitialState = {
  loading: true,
  mainData: null,
  errorMessage: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState: myInitialState,
  extraReducers: {
    [fetchMain.pending]: (state) => {
      state.loading = true;
    },
    // [fetchMain.rejected]: (state, action) => {},
    [fetchMain.fulfilled]: (state, action) => {
      // console.log(action);
      if (action.payload.error) {
        // console.log(action.payload.error);
        state.loading = false;
        state.mainData = null;
        state.errorMessage = action.payload.text;
        // console.log("rejected");
      } else {
        state.loading = false;
        state.mainData = action.payload;
        state.errorMessage = null;
        // console.log("completed");
      }
    },
  },
});


export default mainSlice.reducer;
