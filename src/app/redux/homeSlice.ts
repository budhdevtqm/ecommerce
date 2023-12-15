"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../common-utils/common-fns";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  created_by: number;
  created_at: string;
  updated_at: string;
  status: number;
  images: string[] | [];
  quantity: string | number;
}

export interface AddCartProduct {
  id?: number;
  user_id: number;
  product_id: number;
  product_name: string;
  product_image: string;
  price: string;
}

interface Initials {
  loading: boolean;
  products: Product[] | [];
  product: Product | null;
}

const initialState: Initials = {
  loading: false,
  products: [],
  product: null,
};

const getUserInfo = () => {
  const isClient = typeof window;
  if (isClient !== undefined) {
    return localStorage.getItem("userEmail");
  }
  return "";
};

export const getAllProducts = createAsyncThunk(
  "/fetch-all-products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/home");
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

export const getSingleProduct = createAsyncThunk(
  "/get-product",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/home/${id}`);
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

export const addToCart = createAsyncThunk(
  "/add-to-cart",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/home", { id }, headers);
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

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data.data;
      });
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload.data.data;
      });
  },
});

export default homeSlice.reducer;
