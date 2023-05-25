import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Accounts",
};

export const crumbSlice = createSlice({
  name: "crumb",
  initialState,
  reducers: {
    addValue: (state) => {
      state.value = "Accounts - Clubs";
    },
    changeCrumb: (state, action) => {
      state.value = "Accounts - " + action.payload 
    },
    changeSubCrumb: (state, action) => {
      state.value =  state.value + " - " + action.payload
    }
  },
});

export const { addValue, changeCrumb, changeSubCrumb } = crumbSlice.actions;
export default crumbSlice.reducer;
