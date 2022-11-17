import { configureStore } from "@reduxjs/toolkit";
import { gratitudesSlice } from "./gratitudes/gratitudesSlice";
import { gratitudeSlice } from "./gratitudes/gratitudeSlice";
import { authSlice } from "./auth/authSlice";
import { googleSlice } from "./auth/authService";

export default configureStore({
  reducer: {
    gratitudes: gratitudesSlice.reducer,
    gratitude: gratitudeSlice.reducer,
    user: authSlice.reducer,
    googleUser: googleSlice.reducer,
  },
});
