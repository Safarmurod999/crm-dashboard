import { combineReducers, createStore } from "redux";
import ThemeReducer from "../reducers/ThemeReducer";

// const configureStore = createStore(ThemeReducer);
const rootReducer = combineReducers({ ThemeReducer });
const configureStore = createStore(rootReducer);

export default configureStore;
