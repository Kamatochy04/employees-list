import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

const employesSlice = createSlice({
  name: "employees",
  initialState: {
    employes: [],
  },
  reducers: {
    addemployees(state, action) {
      state.employes.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        increase: false,
      });
    },
    removeemployees(state, action) {},
    toggleIncrease(state, action) {},
  },
});

export const { addemployees, removeemployees, toggleIncrease } =
  employesSlice.actions;
export default employesSlice.reducer;
