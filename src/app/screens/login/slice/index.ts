/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { LoginSaga } from './saga';
import { IinitialLoginState } from './types';

export const initialState: IinitialLoginState = {
  isLoging: false,
  token: '',
};

const slice = createSlice({
  name: 'loginScreen',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoging = true;
      console.log(action.type);
    },
    loginSuccess(state, action) {
      state.isLoging = false;
      state.token = action.payload;
      console.log('success', state.token);
    },
    loginError(state, action) {
      state.isLoging = false;
      console.log('error', action.payload);
    },
  },
});

export const { actions: LoginScreenAction } = slice;

export const useLoginScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LoginSaga });
  return { actions: slice.actions };
};
