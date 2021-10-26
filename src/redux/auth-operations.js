import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const registerUser = createAsyncThunk(
  "/auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const logInUser = createAsyncThunk(
  "/auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const logOutUser = createAsyncThunk("/auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return error;
  }
});

const fetchCurrentUser = createAsyncThunk("auth/fetch", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistorToken = state.auth.token;

  if (persistorToken === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistorToken);

  try {
    const { data } = await axios.get("/users/current/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const authOperations = {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
};
export default authOperations;
