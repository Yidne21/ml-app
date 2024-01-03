/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { ForgotPasswordSaga } from './saga';
import { IinitialForgotPasswordState } from './types';

export const initialState: IinitialForgotPasswordState = {
  isForgotingPassword: false,
  isVerifyiedOtp: false,
};

const slice = createSlice({
  name: 'forgotPasswordScreen',
  initialState,
  reducers: {
    forgotPassword(state, action) {
      state.isForgotingPassword = true;
      console.log(action.type);
    },
    forgotPasswordSuccess(state, action) {
      state.isForgotingPassword = false;
      state.isVerifyiedOtp = action.payload;
      console.log('success', state.isVerifyiedOtp);
    },
    forgotPasswordError(state, action) {
      state.isForgotingPassword = false;
      console.log('error', action.payload);
    },
  },
});

export const { actions: ForgotPasswordScreenAction } = slice;

export const useForgotPasswordScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ForgotPasswordSaga });
  return { actions: slice.actions };
};
