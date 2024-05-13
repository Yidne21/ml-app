/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { cartDetailSaga } from './saga';
import { InitialCartState } from './types';

export const initialState: InitialCartState = {
  isLoading: false,
  cartDetail: {
    totalDocuments: 0,
    totalPages: 0,
    data: [],
  },
  isCheckingOut: false,
  chapaCheckOutUrl: '',
  chapaError: '',
  isCheckOutSuccess: false,
  isOrderCreating: false,
  isOrderCreated: false,
};

const slice = createSlice({
  name: 'cartScreen',
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.isLoading = true;
    },
    getCartSuccess: (state, action) => {
      state.isLoading = false;
      state.cartDetail = action.payload;
    },
    getCartFailur: (state, action) => {
      state.isLoading = false;
    },
    checkOut: (state, action) => {
      state.isCheckingOut = true;
      state.isCheckOutSuccess = false;
      console.log(action.payload);
    },
    checkOutSuccess: (state, action) => {
      state.isCheckingOut = false;
      state.isCheckOutSuccess = true;
      state.chapaCheckOutUrl = action.payload.checkout_url;
      console.log(state.chapaCheckOutUrl);
    },
    checkOutFailur: (state, action) => {
      state.isCheckingOut = false;
      state.isCheckOutSuccess = false;
      state.chapaCheckOutUrl = '';
      state.chapaError = action.payload;
      console.log(state.chapaError);
    },
    createOrder: (state, action) => {
      state.isOrderCreating = true;
      state.isOrderCreated = false;
    },
    createOrderSuccess: (state, action) => {
      state.isOrderCreating = false;
      state.isOrderCreated = true;
    },
    createOrderFailur: (state, action) => {
      state.isOrderCreating = false;
      state.isOrderCreated = false;
    },
    addToCart: (state, action) => {},
    addToCartSuccess: (state, action) => {},
    addToCartFailur: (state, action) => {},
  },
});

export const { actions: cartDtailAction } = slice;

export const useCartDtailScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartDetailSaga });
  return { actions: slice.actions };
};
