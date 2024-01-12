import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { PharmacyDetailAction as actions } from '.';
import { IgetPharmacyDetailPayload } from './types';

function* getPharmacyDetail(action: PayloadAction<IgetPharmacyDetailPayload>) {
  const pharmacyId = action.payload;
  try {
    const pharmacydetail: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `pharmacy/${pharmacyId}`,
    });
    if (pharmacydetail.status === 200) {
      yield put({
        type: actions.getPharmacyDetailSuccess.type,
        payload: pharmacydetail.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.getPharmacyDetailFailure, payload: error });
  }
}

export function* PharmacyDetailSaga() {
  yield takeLatest(actions.getPharmacyDetail.type, getPharmacyDetail);
}
