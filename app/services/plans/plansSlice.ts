import { createSlice } from "@reduxjs/toolkit";
import { findPlans } from "./actions";
import { IPlan } from "@/app/interfaces";

type TInitialState = {
  loading: boolean;
  error?: string | null;
  items: IPlan[];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  items: [],
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  selectors: {
    getPlans: (state) => state.items,
    getPlansLoading: (state) => state.loading,
    getPlansError: (state) => state.error,
  },
  extraReducers(builder) {
    builder
      .addCase(findPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(findPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(findPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = plansSlice.actions;
export const { getPlans, getPlansLoading, getPlansError } =
  plansSlice.selectors;
export default plansSlice;
