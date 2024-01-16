/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  removeCurrentUser: () => {},
  profile: null,
  setProfileImage: () => {},
  companyLogo: null,
  setCompanyLogo: () => {},
});
const ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  REMOVE_CURRENT_USER: "REMOVE_CURRENT_USER",
  SET_PROFILE: "SET_PROFILE",
  SET_COMPANY_LOGO: "SET_COMPANY_LOGO",
};
const INITIAL_STATE = {
  currentUser: null,
};
const createAction = (type, payload) => ({ type, payload });
export const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case ACTION_TYPE.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case ACTION_TYPE.SET_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case ACTION_TYPE.SET_COMPANY_LOGO:
      return {
        ...state,
        companyLogo: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in user reducer`);
  }
};
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch(createAction(ACTION_TYPE.SET_CURRENT_USER, user));
  };
  const removeCurrentUser = () => {
    dispatch(createAction("HELLO"));
  };
  const setProfileImage = () => {
    dispatch(createAction(ACTION_TYPE.SET_PROFILE));
  };
  const value = {
    currentUser,
    setCurrentUser,
    removeCurrentUser,
    setProfileImage,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
