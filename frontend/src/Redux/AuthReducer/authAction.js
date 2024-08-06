// actionTypes.js


// authActions.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from "./actionTypes";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
