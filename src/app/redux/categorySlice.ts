import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CategoryValues {
  name: string;
}

interface InitalsType {
  categories: any;
}

const initialState: InitalsType = {
  categories: [],
};

export const addCategory = createAsyncThunk(
  "/add-category",
  async (values: CategoryValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/category", values);
      console.log("add-cat-res", response);
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

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default categorySlice.reducer;
