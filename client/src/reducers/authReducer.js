/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  isAuthenticated: false,
  user: {},
};

// takes state and action as an agrument we are going to dispatch
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
// case SET_CURRENT_USER:
//   return;
