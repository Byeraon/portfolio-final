import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { User } from "../../models";

export interface UserState {
  user: User;
  accessToken: string | null;
}

export const USER_ACTIONS = {
  SET_USER_STATE: "user/SET_USER_STATE",
  ADD_USER_TO_STORE: "user/ADD_USER_TO_STORE",
};

const initialState: UserState = {
  user: new User({}),
  accessToken: null,
};

const addUserToStore = (
  state: WritableDraft<UserState>,
  action: PayloadAction<User>
) => ({ ...state, user: action.payload });

export default createReducer<UserState>(initialState, {
  [USER_ACTIONS.SET_USER_STATE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [USER_ACTIONS.ADD_USER_TO_STORE]: addUserToStore,
});
