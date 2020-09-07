import { userActionTypes } from "./actionTypes";
const INITIAL_STATE = {
  currentUser: null,
};

// If state is ever undefined we can set the default param to our Initial state.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
