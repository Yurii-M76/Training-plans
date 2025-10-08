import { createAsyncThunk } from "@reduxjs/toolkit";
import { findPlansFromApi } from "@/app/lib/api";
import { IPlan } from "@/app/interfaces";

const PATH = "plans";

export const findPlans = createAsyncThunk(
  "plans/findAll",
  async () => await findPlansFromApi<IPlan[]>(PATH),
);
