import { store } from "../index";
import { USER_ACTIONS, UserState } from "./reducer";

export const setUserState = (state: Partial<UserState>) => {
  return store.dispatch({
    type: USER_ACTIONS.SET_USER_STATE,
    payload: state,
  });
};
