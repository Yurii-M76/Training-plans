import { combineReducers, configureStore } from "@reduxjs/toolkit";
import plansSlice from "../services/plans/plansSlice";

export const rootReducer = combineReducers({
  [plansSlice.reducerPath]: plansSlice.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
