import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    selectedTab:1
};

const userRoomSlice = createSlice({
  name: "userRoom",
  initialState: initialState,
  reducers: {
    selectTab(state,action){
        state.selectedTab=action.payload;
    }
  },
});

export const  {selectTab} = userRoomSlice.actions;
export default userRoomSlice.reducer;
