import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is-empty";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  isAuthenticated: false,
  user: {},
};

// takes state and action as an agrument we are going to dispatch
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
