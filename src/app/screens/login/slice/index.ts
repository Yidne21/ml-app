/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { LoginSaga } from './saga';
import { IinitialLoginState } from './types';
import { storeData } from '../../../../utils/configs/asyncStorage';

export const initialState: IinitialLoginState = {
  isLoging: false,
  isLogedin: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'loginScreen',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoging = true;
    },
    loginSuccess(state, action) {
      state.isLoging = false;
      state.isLogedin = true;
      storeData('userData', action.payload);
    },
    loginError(state, action) {
      state.isLoging = false;
      state.isLogedin = false;
      state.errorMessage = action.payload;
    },
    resetLoginState(state) {
      state.isLoging = false;
      state.isLogedin = false;
      state.errorMessage = '';
    },
  },
});

export const { actions: LoginScreenAction } = slice;

export const useLoginScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LoginSaga });
  return { actions: slice.actions };
};
