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

export interface FetchedProduct {
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
  total?: number;
  rest?: number;
}

export interface ProductFormCategories {
  id: number;
  name: string;
}

interface InitialTypes {
  loading: boolean;
  products: FetchedProduct[] | [];
  categories: ProductFormCategories[] | [];
  product: FetchedProduct | null;
}

const initialState: InitialTypes = {
  loading: false,
  products: [],
  categories: [],
  product: null,
};

export const getAllProducts = createAsyncThunk(
  "/get-all-products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/product");
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

export const getProduct = createAsyncThunk(
  "/get-product",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/product/${id}`);
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
      });

    builder
      .addCase(allCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data.data;
      });
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.data.data;
      });

    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload.data.data;
      });
  },
});

export default productSlice.reducer;
