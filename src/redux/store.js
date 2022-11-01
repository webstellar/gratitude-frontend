import { configureStore } from "@reduxjs/toolkit";
import { gratitudesSlice } from "./gratitudes/gratitudesSlice";
//import reducers

export const store = configureStore({
  reducer: {
    gratitudes: gratitudesSlice.reducer,
  },
});
