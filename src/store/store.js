import { configureStore } from "@reduxjs/toolkit";

import employesReducer from "./employesSlice";

export default configureStore({
  reducer: {
    employes: employesReducer,
  },
});
