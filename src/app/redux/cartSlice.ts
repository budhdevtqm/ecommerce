"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Initials {
  loading: boolean;
  cartItems: any[];
}

const initialState: Initials = {
  loading: false,
  cartItems: [],
};

export const getAllCartItems = createAsyncThunk(
  "/get-cart-items",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/cart", {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJidWRoZGV2dHFtQGdtYWlsLmNvbSIsInVzZXJSb2xlIjoiYWRtaW4iLCJleHAiOjE3MDI0NjAzODF9.wYzZUveEtnjaHD1LTcPjN4S_O19iqmLftLBPvkkeNE0",
        },
      });
      return response;
    } catch (er) {
      if (axios.isAxiosError(er)) {
        return rejectWithValue(er.response?.data);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCartItems.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("get-cart-items-payload", payload);
      });
  },
});

export default cartSlice.reducer;
