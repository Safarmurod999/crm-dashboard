import * as actionTypes from "../actionTypes/actionTypes";

const ThemeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MODE:
      return { ...state, mode: payload };

    case actionTypes.SET_COLOR:
      return { ...state, color: payload };

    default:
      return state;
  }
};

export default ThemeReducer;
