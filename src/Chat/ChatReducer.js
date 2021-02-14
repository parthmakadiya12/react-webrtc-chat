import { types } from "./types";
const chatReducer = function (initialState = {}, action) {
  switch (action.type) {
    case types.INITIALIZE_PEER:
      return {
        ...initialState,
        peer: action.peer,
        my_id: action.my_id,
        connection: action.connection,
      };
    case types.CONNECT:
      return {
        ...initialState,
        connection: action.connection,
        connected: action.connected,
      };
    default:
      return state;
  }
};
