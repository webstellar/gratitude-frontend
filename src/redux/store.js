import { configureStore } from "@reduxjs/toolkit";
import { gratitudesSlice } from "./gratitudes/gratitudesSlice";
import { gratitudeSlice } from "./gratitudes/gratitudeSlice";
import { authSlice } from "./auth/authSlice";
import { googleSlice } from "./auth/authGoogleSlice";
import { heroSlice } from "./heroes/heroSlice";
import { createHeroSlice } from "./heroes/createHeroSlice";
import { createGratitudeSlice } from "./gratitudes/createGratitudeSlice";
import { heroesSlice } from "./heroes/heroesSlice";
import { myGratitudesSlice } from "./gratitudes/myGratitudeSlice";
import { myAuthSlice } from "./auth/myAuthSlice";
import { authPasswordSlice } from "./auth/authPasswordSlice";
import { allUserSlice } from "./auth/allUserSlice";
import { myHeroesSlice } from "./heroes/myHeroSlice";
import { deleteMyHeroSlice } from "./heroes/deleteMyHeroSlice";
import { deleteMyGratitudeSlice } from "./gratitudes/deleteMyGratitudeSlice";

export default configureStore({
  reducer: {
    mygratitudes: myGratitudesSlice.reducer,
    gratitudes: gratitudesSlice.reducer,
    gratitude: gratitudeSlice.reducer,
    myHeroes: myHeroesSlice.reducer,
    heroes: heroesSlice.reducer,
    hero: heroSlice.reducer,
    auth: authSlice.reducer,
    user: myAuthSlice.reducer,
    users: allUserSlice.reducer,
    authGoogle: googleSlice.reducer,
    createHero: createHeroSlice.reducer,
    deleteHeroes: deleteMyHeroSlice.reducer,
    forgotPassword: authPasswordSlice.reducer,
    createGratitude: createGratitudeSlice.reducer,
    deleteGratitude: deleteMyGratitudeSlice.reducer,
  },
});
