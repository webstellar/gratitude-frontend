import { configureStore } from "@reduxjs/toolkit";
import { gratitudesSlice } from "./gratitudes/gratitudesSlice";
import { gratitudeSlice } from "./gratitudes/gratitudeSlice";
import { authSlice } from "./auth/authSlice";
import { googleSlice } from "./auth/authService";
import { heroSlice } from "./heroes/heroSlice";
import { createHeroSlice } from "./heroes/createHeroSlice";
import { createGratitudeSlice } from "./gratitudes/createGratitudeSlice";
import { heroesSlice } from "./heroes/heroesSlice";
import { myGratitudesSlice } from "./gratitudes/myGratitudeSlice";

export default configureStore({
  reducer: {
    mygratitudes: myGratitudesSlice.reducer,
    gratitudes: gratitudesSlice.reducer,
    gratitude: gratitudeSlice.reducer,
    heroes: heroesSlice.reducer,
    hero: heroSlice.reducer,
    user: authSlice.reducer,
    googleUser: googleSlice.reducer,
    createHero: createHeroSlice.reducer,
    createGratitude: createGratitudeSlice.reducer,
  },
});
