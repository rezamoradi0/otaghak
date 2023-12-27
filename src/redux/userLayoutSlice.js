import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ADDRESS } from "../constant/address";

export const fetchUserLayout = createAsyncThunk(
  "userLayout/fetchUserLayout",
  async () => {
    const response = await axios
      .get(API_ADDRESS + "/userLayout")
      .then((res) => res.data)
      .catch((err) => {
        return { error: true, text: err.message };
      });
    return response;
  }
);
const state = {
  loading: true,
  userLayoutData: null,
  error: null,
};
const userLayoutSlice = createSlice({
  name: "userLayout",
  initialState: state,
  extraReducers: {
    [fetchUserLayout.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserLayout.fulfilled]: (state, action) => {
        state.loading=false;
      if (action.payload.error) {
        state.error=action.payload.error.text;
      } else {
        state.error=null;
        state.userLayoutData=action.payload;
      }
    },
  },
});
export default userLayoutSlice.reducer;
