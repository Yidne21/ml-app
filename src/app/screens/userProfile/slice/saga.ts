import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { userProfileScreenAction as actions } from '.';
import { IgetUserProfilePayload } from './types';

function* getUserProfile(action: PayloadAction<IgetUserProfilePayload>) {
  const userId = action.payload;
  try {
    const user: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `user/${userId}`,
    });
    if (user.status === 200) {
      yield put({
        type: actions.getUserProfileSuccess.type,
        payload: user.data,
      });
    }
  } catch (error) {
    yield put({ type: actions.getUserProfileError, payload: error });
  }
}

export function* UserProfileSaga() {
  yield takeLatest(actions.getUserProfile.type, getUserProfile);
}
