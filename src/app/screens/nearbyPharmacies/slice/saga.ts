import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IgetNearbyPharmaciesPayload } from './types';
import { NearbyPharmacyAction as actions } from '.';

function* getNearbyPharmacies(action: PayloadAction<IgetNearbyPharmaciesPayload>) {
  const { pageState } = action.payload;

  try {
    const nearbyPharmacies: AxiosResponse = yield call(API, {
      method: 'GET',
      route: 'pharmacy/gust',
      params: { ...pageState },
    });
    if (nearbyPharmacies.status === 200) {
      yield put({
        type: actions.getNearbyPharmaciesSuccess.type,
        payload: nearbyPharmacies.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.getNearbyPharmaciesFailure, payload: error });
  }
}

function* getSearchedNearbyPharmacies(action: PayloadAction<IgetNearbyPharmaciesPayload>) {
  const { pageState } = action.payload;
  try {
    const nearbyPharmacies: AxiosResponse = yield call(API, {
      method: 'GET',
      route: 'pharmacy',
      params: { ...pageState },
    });
    if (nearbyPharmacies.status === 200) {
      if (pageState) {
        yield put({
          type: actions.getSearchedNearbyPharmaciesSuccess.type,
          payload: nearbyPharmacies.data,
        });
      } else {
        yield put({
          type: actions.getSearchedNearbyPharmaciesFailure.type,
          payload: nearbyPharmacies.data,
        });
      }
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.getSearchedNearbyPharmaciesFailure, payload: error });
  }
}

export function* NearbyPharmacySaga() {
  yield takeLatest(actions.getNearbyPharmacies.type, getNearbyPharmacies);
  yield takeLatest(actions.getSearchedNearbyPharmacies.type, getSearchedNearbyPharmacies);
}
