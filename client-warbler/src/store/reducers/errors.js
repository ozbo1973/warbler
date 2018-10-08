import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
  message: null
};

export default (state = DEFAULT_STATE, action) => {
  let newState = state;
  switch (action.type) {
    case ADD_ERROR:
      return { ...newState, message: action.error };
    case REMOVE_ERROR:
      return { ...newState, message: null };

    default:
      return { ...state };
  }
};
