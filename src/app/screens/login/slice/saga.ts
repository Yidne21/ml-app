import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { LoginScreenAction as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ILoginPayload } from './types';

function* Login(action: PayloadAction<ILoginPayload>) {
  const { password, email } = action.payload;
  try {
    const user: AxiosResponse = yield call(API, {
      method: 'POST',
      route: 'user/login',
      payload: {
        password,
        email,
      },
    });
    if (user.status === 200) {
      yield put({
        type: actions.loginSuccess.type,
        payload: user.data,
      });
    }
  } catch (error) {
    yield put({ type: actions.loginError, payload: error });
  }
}

export function* LoginSaga() {
  yield takeLatest(actions.login.type, Login);
}
