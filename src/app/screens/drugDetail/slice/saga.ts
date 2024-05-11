import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { drugDetailAction as actions } from '.';
import { IdrugDetailPayload } from './types';

function* getDrugDetail(action: PayloadAction<IdrugDetailPayload>) {
  console.log('action.payload', action.payload);
  const { drugId, stockId } = action.payload;
  try {
    const drugDetail: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `drug/${drugId}`,
      params: { stockId },
    });
    if (drugDetail.status === 200) {
      yield put({
        type: actions.getDrugDetailSuccess.type,
        payload: drugDetail.data,
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
