import { createSlice } from "@reduxjs/toolkit";
import { GetDate, GetFullDataForMonth } from "../utils/functions/DateFunc";

const initialState = {
  //{year: 1402 , monthName : "Dey" ,dayCount:30 , DayStartIndex:4 ,daysInfo:[{isPrime:false ,price:3300,discount:10,available:true}]}
  monthTables: [],
  tableIndex: 0,
  tablesNumber: 2,
  maxTabIndex: 5,
  canNext: true,
  canPerv: false,
};
const DatePickerSlice = createSlice({
  name: "datePicker",
  initialState: initialState,
  reducers: {
    DateWorks(state, action) {
      const dateInfoFa = GetDate(action.payload.date);
      state.maxTabIndex = action.payload.months.length;
      // console.log(getNextMonth(dateInfoFa.monthEn));
      state.monthTables = action.payload.months.map((monthData, i) => {
        let monthInformation = GetFullDataForMonth(dateInfoFa, i);
        monthInformation.daysInfo = monthData;
        // console.log(monthInformation);
        return monthInformation;
      });
    },

    nextMonth(state) {
      state.canNext = true;
      state.canPerv = true;
      if (state.tableIndex < state.maxTabIndex - state.tablesNumber) {
        state.tableIndex++;
        if(state.tableIndex === state.maxTabIndex - state.tablesNumber){
          state.canNext = false;
        }
      } else {
        state.canNext = false;
    
      }
    },
    pervMonth(state) {
      state.canPerv = true;
      state.canNext = true;
      if (state.tableIndex > 0) {
        state.tableIndex--;
        if(state.tableIndex===0){
          state.canPerv = false;
        }
      } else {
        state.canPerv = false;
       
      }
    },
  },
});

export const { DateWorks, nextMonth, pervMonth } = DatePickerSlice.actions;
export default DatePickerSlice.reducer;
