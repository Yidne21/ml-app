import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { userProfileScreenAction as actions } from '.';
import { IupdateUserProfilePayload } from './types';

function* updateUserProfile(action: PayloadAction<IupdateUserProfilePayload>) {
  const { userId, userData } = action.payload;

  console.log('---------saGAuserData', action.payload.userData);

  try {
    const user: AxiosResponse = yield call(API, {
      method: 'PUT',
      route: `user/${userId}`,
      payload: userData,
    });
    if (user.status === 200) {
      yield put({
        type: actions.updateUserProfileSuccess.type,
        payload: user.data,
      });
    } else {
      yield put({
        type: actions.updateUserProfileError.type,
        payload: user.data,
      });
    }
  } catch (error) {
    yield put({ type: actions.updateUserProfileError, payload: error });
  }
}

export function* UserProfileUpdateSaga() {
  yield takeLatest(actions.updateUserProfile.type, updateUserProfile);
}
