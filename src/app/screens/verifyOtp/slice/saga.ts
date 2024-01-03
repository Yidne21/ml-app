import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { verifyOtpScreenAction as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IverifyOtpPayload } from './types';

function* VerifyOtp(action: PayloadAction<IverifyOtpPayload>) {
  const { phoneNumber, code } = action.payload;
  try {
    const user: AxiosResponse = yield call(API, {
      method: 'POST',
      route: 'user/verify-otp',
      data: {
        phoneNumber,
        code,
      },
    });
    if (user.status === 200) {
      yield put({
        type: actions.verifyOtpSuccess.type,
        payload: user.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.verifyOtpError, payload: error });
  }
}

export function* VerifyOtpSaga() {
  yield takeLatest(actions.verifyOtp.type, VerifyOtp);
}
