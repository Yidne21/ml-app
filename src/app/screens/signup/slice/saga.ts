import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { SignupScreenAction as actions } from '.';
import { IsignUpPayload } from './types';

function* SignUp(action: PayloadAction<IsignUpPayload>) {
  const { password, name, email } = action.payload;
  try {
    const user: AxiosResponse = yield call(API, {
      method: 'POST',
      route: 'user/signUp',
      payload: {
        role: 'customer',
        password,
        name,
        email,
      },
    });
    if (user.status === 200) {
      yield put({
        type: actions.signUpSuccess.type,
        payload: user.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.signUpFailure, payload: error });
  }
}

export function* SignUpSaga() {
  yield takeLatest(actions.signUp.type, SignUp);
}
