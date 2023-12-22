import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../common-utils/common-fns";

interface Initals {
  loading: boolean;
  order: any | null;
  orders: any[] | [];
}

const initialState: Initals = {
  loading: false,
  order: null,
  orders: [],
};

export const getMyOrders = createAsyncThunk(
  "/get-my-order",
  async (_, { rejectWithValue }) => {
    try {
    } catch (er) {
      if (axios.isAxiosError(er)) {
        return rejectWithValue(er.response?.data);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export const getSingleOrder = createAsyncThunk(
  "/get-single-order",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = axios.get(`/api/order/${id}`, headers);
    } catch (er) {
      if (axios.isAxiosError(er)) {
        return rejectWithValue(er.response?.data);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default orderSlice.reducer;
