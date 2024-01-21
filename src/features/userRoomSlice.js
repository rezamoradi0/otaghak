import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: "imagesGallery",
  selectedGallery:false
};



const userRoomSlice = createSlice({
  name: "userRoom",
  initialState: initialState,
  reducers: {
    selectTab(state, action) {
      state.selectedTab = action.payload;
    },
    selectGallery(state){
      state.selectedGallery=!state.selectedGallery;
    }
  },
});


export const { selectTab,selectGallery } = userRoomSlice.actions;



export default userRoomSlice.reducer;