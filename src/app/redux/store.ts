import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import homeReducer from "./homeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    category: categoryReducer,
    product: productReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
