/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { SignUpSaga } from './saga';
import { IinitialSignUpState } from './types';

export const initialState: IinitialSignUpState = {
  isSigning: false,
  user: undefined,
};

const slice = createSlice({
  name: 'signUpScreen',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.isSigning = true;
      console.log('action.payload', action.payload);
    },
    signUpSuccess: (state, action) => {
      state.isSigning = false;
      state.user = action.payload;
      console.log('state.user', state.user);
    },
    signUpFailure: (state, action) => {
      state.isSigning = false;
      state.user = action.payload;
      console.log('state.error', action.payload);
    },
  },
});

export const { actions: SignupScreenAction } = slice;

export const useSignUpScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: SignUpSaga });
  return { actions: slice.actions };
};
