import * as actionTypes from "../actionTypes/actionTypes";

export const setMode = (mode) => ({
  type: actionTypes.SET_MODE,
  payload: mode,
});

export const setColor = (color) => ({
  type: actionTypes.SET_COLOR,
  payload: color,
});

export const getTheme = () => ({
  type: actionTypes.GET_THEME,
});
