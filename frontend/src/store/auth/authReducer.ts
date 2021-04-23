import { authActions, AuthState, AuthActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: AuthState = {
  token: "",
  error: "",
  isFetching: false
};

export const authReducer: Reducer<AuthState, AuthActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case authActions.SIGN_IN:
      return {
        ...state,
        isFetching: true
      };
    case authActions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isFetching: false
      };
    case authActions.AUTHENTICATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      };
    case authActions.SIGN_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
