import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { ResetPasswordAction as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IResetPasswordPayload } from './types';

function* ResetPassword(action: PayloadAction<IResetPasswordPayload>) {
  const { phoneNumber, newPassword } = action.payload.user;
  try {
    const user: AxiosResponse = yield call(API, {
      method: 'POST',
      route: 'user/resetPassword',
      data: {
        phoneNumber,
        newPassword,
      },
    });
    if (user.status === 200) {
      yield put({
        type: actions.resetPasswordSuccess.type,
        payload: user.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.resetPasswordError, payload: error });
  }
}

export function* ResetPasswordSaga() {
  yield takeLatest(actions.resetPassword.type, ResetPassword);
}
