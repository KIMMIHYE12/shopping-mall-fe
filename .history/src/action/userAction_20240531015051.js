import api from "../utils/api";
import * as types from "../constants/user.constants";
import { commonUiActions } from "./commonUiAction";
import * as commonTypes from "../constants/commonUI.constants";
const loginWithToken = () => async (dispatch) => {};
const loginWithEmail = (payload) => async (dispatch) => {};
const logout = () => async (dispatch) => {};

const loginWithGoogle = (token) => async (dispatch) => {};

const registerUser =
  ({ email, name, password }) =>
  async (dispatch) => {
    try {
    } catch (error) {}
  };
export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  loginWithGoogle,
  registerUser,
};
