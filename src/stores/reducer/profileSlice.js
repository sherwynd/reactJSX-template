import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiTokenTemplate } from "../../services/api";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (token, { rejectWithValue }) => {
    try {
      const method = "GET";
      const controller = "auth/getToken";
      const data = await apiTokenTemplate(method, token, controller);
      if (data.error) {
        console.error(data.error);
        return rejectWithValue(data);
      }
      localStorage.setItem("profile", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: JSON.parse(localStorage.getItem("profile")) || {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
