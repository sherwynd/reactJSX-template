import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducer/profileSlice.js";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
