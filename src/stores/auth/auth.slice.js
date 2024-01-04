import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
  googleLogin: false,
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setGoogleLogin: (state, action) => {
      if (action.payload) {
        localStorage.setItem("googleLogin", action.payload);
      } else {
        localStorage.removeItem("googleLogin");
      }

      state.googleLogin = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { setToken, setUser, setGoogleLogin, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
