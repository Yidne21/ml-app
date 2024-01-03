/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { ResetPasswordSaga } from './saga';
import { IinitialResetPasswordState } from './types';

export const initialState: IinitialResetPasswordState = {
  isResettingPassword: false,
};

const slice = createSlice({
  name: 'resetPasswordScreen',
  initialState,
  reducers: {
    resetPassword(state, action) {
      state.isResettingPassword = true;
      console.log(action.type);
    },
    resetPasswordSuccess(state, action) {
      state.isResettingPassword = false;
      console.log('success', action.payload);
    },
    resetPasswordError(state, action) {
      state.isResettingPassword = false;
      console.log('error', action.payload);
    },
  },
});

export const { actions: ResetPasswordAction } = slice;

export const useResetPasswordSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ResetPasswordSaga });
  return { actions: slice.actions };
};
