import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface LoginValues {
  email: string;
  password: string;
}

export interface SignupValues {
  name: string;
  email: string;
  password: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

interface AuthInitials {
  isLoggedIn: boolean;
  token: string;
  authMode: string;
}

const initialState: AuthInitials = {
  isLoggedIn: false,
  token: "",
  authMode: "login",
};

export const handleLogin = createAsyncThunk("/login", async (values) => {
  try {
  } catch (er) {}
});

export const handleSignup = createAsyncThunk(
  "/signup",
  async (values, { rejectWithValue }) => {
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuthMode: (state, action) => {
      state.authMode = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { toggleAuthMode } = authSlice.actions;
export default authSlice.reducer;
