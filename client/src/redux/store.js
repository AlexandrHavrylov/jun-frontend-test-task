import { configureStore } from "@reduxjs/toolkit";
import horsers from "./horsers/horsersSlice";

export const store = configureStore({
  reducer: {
    horsers,
  },
});
