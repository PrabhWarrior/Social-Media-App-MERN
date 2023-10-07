/*
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const middleware = [thunk];

const initalState = {};

// Empty Function -- array(root-reducer), inital-empty-object, middleware
const store = createStore(
  () => rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  // The above statement is used to apply redux dev tools else we can ue the below line of code
  //   applyMiddleware(...middleware)
);
*/
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Define your initial state (if needed)
const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState, // Set your initial state here
});

export default store;
