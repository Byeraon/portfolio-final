import { AppState } from "../index";

export const userStateSelector = (state: AppState) => {
  return { ...state.user };
};
