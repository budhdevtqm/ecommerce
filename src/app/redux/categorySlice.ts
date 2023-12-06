import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CategoryValues {
  name: string;
  id?: string;
}

interface InitalsType {
  categories: FetchedCategory[] | [];
  loading: boolean;
  category: FetchedCategory | null;
}

export interface FetchedCategory {
  created_at: string;
  created_by: number;
  id: number;
  name: string;
  status: number;
  updated_at: null | string;
}

const initialState: InitalsType = {
  categories: [],
  loading: false,
  category: null,
};

export const getAllCategory = createAsyncThunk(
  "/get-all-category",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("api/category");
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

export const deleteCategory = createAsyncThunk(
  "/delete-category",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/category/${id}`);
      console.log("delete-category", response);
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

export const addCategory = createAsyncThunk(
  "/add-category",
  async (values: CategoryValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/category", {
        ...values,
        userEmail: "budhdevtqm@gmail.com",
      });
      return response;
    } catch (er) {
      console.log("add-cat-er", er);
      if (axios.isAxiosError(er)) {
        return rejectWithValue(er.response?.data);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export const fetchCategory = createAsyncThunk(
  "/get-category",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/category/${id}`);
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

export const upadteCategory = createAsyncThunk(
  "/update-category",
  async (values: CategoryValues, { rejectWithValue }) => {
    try {
      console.log("im-here");
      const { name, id } = values;
      const response = await axios.patch(`/api/category/${id}`, {
        name,
        userEmail: "budhdevtqm@gmail.com",
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

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload.data.data;
      });

    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.category = payload.data.data;
      });
  },
});

export default categorySlice.reducer;
