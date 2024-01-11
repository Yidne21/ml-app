import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { ForgotPasswordScreenAction as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IForgotPasswordPayload } from './types';

function* ForgotPassword(action: PayloadAction<IForgotPasswordPayload>) {
  try {
    const user: AxiosResponse = yield call(API, {
      method: 'POST',
      route: 'user/send-otp',
      payload: {
        phoneNumber: action.payload,
      },
    });
    if (user.status === 200) {
      yield put({
        type: actions.forgotPasswordSuccess.type,
        payload: user.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.forgotPasswordError, payload: error });
  }
}

export function* ForgotPasswordSaga() {
  yield takeLatest(actions.forgotPassword.type, ForgotPassword);
}
