import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { drugSearchScreenAction as actions } from '.';
import { IgetDrugSearchPayload } from './types';

function* drugSearch(action: PayloadAction<IgetDrugSearchPayload>) {
  const { pageState } = action.payload;
  try {
    const drugSearch: AxiosResponse = yield call(API, {
      method: 'GET',
      route: 'drug/customer',
      params: { ...pageState },
    });
    if (drugSearch.status === 200) {
      yield put({
        type: actions.getSearchedDrugSuccess.type,
        payload: drugSearch.data,
      });
    }
  } catch (error) {
    console.log('------->', error);
    yield put({ type: actions.getSearchedDrugFailure, payload: error });
  }
}
export function* drugSearchSaga() {
  yield takeLatest(actions.getSearchedDrug.type, drugSearch);
}
