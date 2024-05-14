import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IgetOrdersPayload } from './types';
import { NearbyPharmacyAction as actions } from '.';

function* getOrders(action: PayloadAction<IgetOrdersPayload>) {
  const { pageState } = action.payload;

  try {
    const Orders: AxiosResponse = yield call(API, {
      method: 'GET',
      route: 'order',
      params: { ...pageState },
    });
    if (Orders.status === 200) {
      yield put({
        type: actions.getOrdersSuccess.type,
        payload: Orders.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.getOrdersFailure, payload: error });
  }
}

function* confirmOrder(action: PayloadAction<{ orderId: string }>) {
  const { orderId } = action.payload;
  try {
    const msg: AxiosResponse = yield call(API, {
      method: 'PUT',
      route: `order/${orderId}/confirm-delivery`,
    });
    if (msg.status === 200) {
      yield put({
        type: actions.confirmOrderSuccess.type,
        payload: msg.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.confirmOrderFailure, payload: error });
  }
}

function* refund(
  action: PayloadAction<{
    orderId: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    bankCode: string;
    accountType: string;
  }>,
) {
  const { orderId, bankName, accountName, accountNumber, bankCode, accountType } = action.payload;
  try {
    const msg: AxiosResponse = yield call(API, {
      method: 'PUT',
      route: `order/${orderId}/refund`,
      payload: { bankName, accountName, accountNumber, bankCode, accountType },
    });
    if (msg.status === 200) {
      yield put({
        type: actions.refundSuccess.type,
        payload: msg.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.refundFailure, payload: error });
  }
}

function* extend(action: PayloadAction<{ orderId: string }>) {
  const { orderId } = action.payload;
  try {
    const Orders: AxiosResponse = yield call(API, {
      method: 'PUT',
      route: `order/${orderId}/extend`,
    });
    if (Orders.status === 200) {
      yield put({
        type: actions.extendSuccess.type,
        payload: Orders.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.extendSuccess, payload: error });
  }
}

export function* orderSaga() {
  yield takeLatest(actions.getOrders.type, getOrders);
  yield takeLatest(actions.confirmOrder.type, confirmOrder);
  yield takeLatest(actions.refund.type, refund);
  yield takeLatest(actions.extend.type, extend);
}
