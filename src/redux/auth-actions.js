import { createAction } from "@reduxjs/toolkit";

const regesterUserRequest = createAction("user/regesterUserRequest");
const regesterUserSuccess = createAction("user/regesterUserSuccess");
const regesterUserError = createAction("user/regesterUserError");

const loginUserRequest = createAction("user/loginUserRequest");
const loginUserSuccess = createAction("user/loginUserSuccess");
const loginUserError = createAction("user/loginUserError");

const authActions = {
  regesterUserRequest,
  regesterUserSuccess,
  regesterUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
};

export default authActions;
