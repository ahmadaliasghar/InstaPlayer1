import { configureStore } from "@reduxjs/toolkit";
import updateCrumb from "../features/updateCrumb";

export const store = configureStore({
  reducer: {
    crumb: updateCrumb,
  },
});
