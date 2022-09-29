import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";
import skills from "./skills";
import { API_REDUCERS_ENUM } from "./reducers";

export const store = configureStore({
  reducer: {
    user,
    [API_REDUCERS_ENUM.SKILLS]: skills.reducer,
  },
  devTools: true,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat(skills.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
