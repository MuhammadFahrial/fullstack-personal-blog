import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/features/AuthSlice";
import postReducer from "../components/features/PostsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
