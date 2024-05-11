/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { VerifyOtpSaga } from './saga';
import { IinitialverifyOtpState } from './types';

export const initialState: IinitialverifyOtpState = {
  isSendingOtp: false,
  validOtp: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'verifyOtpScreen',
  initialState,
  reducers: {
    verifyOtp(state, action) {
      state.errorMessage = '';
      state.isSendingOtp = true;
      console.log(action.type);
    },
    verifyOtpSuccess(state, action) {
      state.isSendingOtp = false;
      state.errorMessage = '';
      state.validOtp = action.payload.valid;
      console.log(action.payload.valid);
    },
    verifyOtpError(state, action) {
      state.isSendingOtp = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: verifyOtpScreenAction } = slice;

export const useVerifyOtpScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: VerifyOtpSaga });
  return { actions: slice.actions };
};
