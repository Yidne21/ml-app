import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../../../utils/configs/API';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { cartDtailAction as actions } from '.';
import { IaddToCartPayload, IcheckOutPayload } from './types';

function* getCartDetail(action: PayloadAction<{ pageState: { page: number; limit: number } }>) {
  const { pageState } = action.payload;
  try {
    const cartDetail: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `cart`,
      params: { ...pageState },
    });
    if (cartDetail.status === 200) {
      yield put({
        type: actions.getCartSuccess.type,
        payload: cartDetail.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.getCartFailur });
  }
}

function* addToCart(action: PayloadAction<IaddToCartPayload>) {
  console.log('action.payload', action.payload);
  const { drugId, stockId, pharmacyId, quantity } = action.payload;
  try {
    const message: AxiosResponse = yield call(API, {
      method: 'POST',
      route: `cart/add`,
      payload: { drugId, stockId, pharmacyId, quantity },
    });
    if (message.status === 200) {
      yield put({
        type: actions.addToCartSuccess.type,
        payload: message.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.addToCartFailur, payload: error });
  }
}

function* checkOut(action: PayloadAction<IcheckOutPayload>) {
  const { email, amount, cartId } = action.payload;
  try {
    const chapaCheckOutUrl: AxiosResponse = yield call(API, {
      method: 'POST',
      route: `transaction/chapa/initiatePayment`,
      payload: { email, amount, cartId },
    });
    if (chapaCheckOutUrl.status === 200) {
      yield put({
        type: actions.checkOutSuccess.type,
        payload: chapaCheckOutUrl.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.checkOutFailur });
  }
}

function* createOrder(
  action: PayloadAction<{ cartId: string; deliveryAddress: [number, number] }>,
) {
  const { cartId, deliveryAddress } = action.payload;
  try {
    const message: AxiosResponse = yield call(API, {
      method: 'POST',
      route: `order/${cartId}`,
      payload: { deliveryAddress },
    });
    if (message.status === 200) {
      yield put({
        type: actions.createOrder.type,
        payload: message.data,
      });
    }
  } catch (error) {
    console.log('--->', error);
    yield put({ type: actions.createOrderFailur, payload: error });
  }
}

export function* cartDetailSaga() {
  yield takeLatest(actions.getCart.type, getCartDetail);
  yield takeLatest(actions.addToCart.type, addToCart);
  yield takeLatest(actions.checkOut.type, checkOut);
  yield takeLatest(actions.createOrder.type, createOrder);
}
