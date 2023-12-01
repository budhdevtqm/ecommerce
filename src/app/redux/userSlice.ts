"use client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { headerConfig } from "../common-utils/common-vars";

export interface UserValues {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserProfile {
  _id: string;
  name: string;
  password: string;
  role: string;
  email: string;
}

export interface ProfileValidation {
  name: string;
  email: string;
  password: string;
}

export interface FetchedUser {
  createAt: string;
  email: string;
  id: number;
  name: string;
  password: string;
  role: string;
  status: number;
  updatedAt: string;
}

export const getAllUsers = createAsyncThunk(
  "/get-all-users",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("api/users", headerConfig);
      return response.data.data;
    } catch (er) {
      if (axios.isAxiosError(er)) {
        return rejectWithValue(er.response?.data);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

interface InitalsType {
  users: [] | FetchedUser[];
  loading: boolean;
}

const initialState: InitalsType = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      });
  },
});

export default userSlice.reducer;
