import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCategory } from "./categorySlice";

export interface File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface ProductValues {
  name: string;
  price: string;
  quantity: string;
  category: string;
  description: string;
  images: Array<File> | [] | string;
}

export interface ProductFormCategories {
  id: number;
  name: string;
}

interface InitialTypes {
  loading: boolean;
  products: any[] | [];
  categories: ProductFormCategories[] | [];
}

const initialState: InitialTypes = {
  loading: false,
  products: [],
  categories: [],
};

export const allCategory = createAsyncThunk(
  "/all-category",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/product/category");
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

export const addProduct = createAsyncThunk(
  "/create-product",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/product", values, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("add-product-response", response);
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

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, ({ loading }) => {
        loading = true;
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("----all products", payload);
      });

    builder
      .addCase(allCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data.data;
      });
  },
});

export default productSlice.reducer;
