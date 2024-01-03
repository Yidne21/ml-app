import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { drugDetailAction as actions } from '.';
import { IdrugDetailPayload } from './types';

function* getDrugDetail(action: PayloadAction<IdrugDetailPayload>) {
  const drugId = action.payload;
  console.log('---DrugId---', drugId);

  try {
    const pharmacydetail: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `drug/${drugId}`,
    });
    if (pharmacydetail.status === 200) {
      yield put({
        type: actions.getDrugDetailSuccess.type,
        payload: pharmacydetail.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.getDrugDetailFailur, payload: error });
  }
}

export function* drugDetailSaga() {
  yield takeLatest(actions.getDrugDetail.type, getDrugDetail);
}
