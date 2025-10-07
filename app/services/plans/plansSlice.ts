import { createSlice } from "@reduxjs/toolkit";
import { findPlans } from "./actions";
import { sortPlans } from "@/app/lib/utils";
import { IPlan } from "@/app/interfaces";

type TInitialState = {
  loading: boolean;
  error?: string | null;
  items: IPlan[];
  isSale: boolean;
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  items: [],
  isSale: true,
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    setIsSale: (state, action) => {
      state.isSale = action.payload;
    },
  },
  selectors: {
    getPlans: (state) => state.items,
    getPlansLoading: (state) => state.loading,
    getPlansError: (state) => state.error,
    getIsSale: (state) => state.isSale,
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
        state.items = sortPlans(action.payload, "desc");
      })
      .addCase(findPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setIsSale } = plansSlice.actions;
export const { getPlans, getPlansLoading, getPlansError, getIsSale } =
  plansSlice.selectors;
export default plansSlice;
