import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  isErrorRegister: false,
  isPending: false,
  isErrorLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isErrorRegister = false;
      state.isPending = false;
    },
    [authOperations.registerUser.pending](state) {
      state.isErrorRegister = false;
      state.isPending = true;
      state.token = null;
    },
    [authOperations.registerUser.rejected](state) {
      state.isErrorRegister = true;
      state.isPending = false;
      state.token = null;
    },

    [authOperations.logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
      state.isErrorLogin = false;
    },
    [authOperations.logInUser.pending](state) {
      state.isErrorLogin = false;
      state.token = null;
      state.isPending = true;
    },
    [authOperations.logInUser.rejected](state) {
      state.isErrorLogin = true;
      state.isPending = false;
      state.token = null;
    },

    [authOperations.logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOutUser.pending](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOutUser.rejected](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshingUser = true;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
      state.isLoggedIn = false;
    },
  },
});

const userReducer = authSlice.reducer;

export default userReducer;
