import { GET_ERRORS } from "../actions/types";
const initialState = {};

// takes state and action as an agrument we are going to dispatch
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
