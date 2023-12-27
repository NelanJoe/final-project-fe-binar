import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }

      state.token = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
