import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicDomElements: {},
};

const domPublicSlice = createSlice({
  name: "domPublic",
  initialState: initialState,
  reducers: {
    addObject(state, action) {
      const key = action.payload.key;
      state.publicDomElements[key] = action.payload.value;
    },
  },
});
export const { addObject } = domPublicSlice.actions;
export default domPublicSlice.reducer;
