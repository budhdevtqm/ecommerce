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

export const handleLogin = createAsyncThunk(
  "/login",
  async (values: LoginValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", values);
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

export const handleLogout = createAsyncThunk(
  "/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/auth/logout");
      console.log("handleLogout  response", response);
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

export const handleSignup = createAsyncThunk(
  "/signup",
  async (values: SignupValues, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", values);
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // handleLogout: (state) => {
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("role");
    // },
    toggleAuthMode: (state, action) => {
      state.authMode = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { toggleAuthMode } = authSlice.actions;
export default authSlice.reducer;
