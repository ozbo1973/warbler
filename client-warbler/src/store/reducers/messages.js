//store/reducers/messages.
import { LOAD_MESSAGES, REMOVE_MESSAGES } from "../actionTypes";

export const messages = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];

    default:
      return { ...state };
  }
};
