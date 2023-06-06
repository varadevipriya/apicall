import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducers/postSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
export default store;
