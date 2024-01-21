import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicDomElements: {},
  publicSelectedObjForScroll:""
};

const domPublicSlice = createSlice({
  name: "domPublic",
  initialState: initialState,
  reducers: {
    addObject(state, action) {
      const key = action.payload.key;
      state.publicDomElements[key] = {value:action.payload.value,height:action.payload.height};
    },
    setObjForScroll(state,action){
      state.publicSelectedObjForScroll=action.payload;
    },
    setNullObjForScroll(state){
      state.publicSelectedObjForScroll="";
    }
  },
});
export const { addObject,setObjForScroll,setNullObjForScroll } = domPublicSlice.actions;
export default domPublicSlice.reducer;
