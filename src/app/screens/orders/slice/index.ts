/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { orderSaga } from './saga';
import { IinitialOrdersState } from './types';

export const initialState: IinitialOrdersState = {
  isLoadingOrders: false,
  isLoadedOrders: false,
  isConfirmingOrder: false,
  isExtendingOrder: false,
  isRequestingRefund: false,
  orders: {
    totalDocuments: 0,
    totalPages: 0,
    data: [],
  },
  getingOrdersError: '',
  confirmingOrderError: '',
  extendingOrderError: '',
  requestingRefundError: '',
  isConfirmingSucces: false,
  isExtendingSucces: false,
  isRequestingRefundSucces: false,
  currentOrder: '',
};

const slice = createSlice({
  name: 'ordersScreen',
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.isLoadingOrders = true;
      state.isLoadedOrders = false;
    },
    getOrdersSuccess: (state, action) => {
      state.isLoadingOrders = false;
      state.isLoadedOrders = true;
      state.orders = action.payload;
    },
    getOrdersFailure: (state, action) => {
      state.isLoadingOrders = false;
      state.isLoadedOrders = false;
      state.getingOrdersError = action.payload;
    },

    refund: (state, action) => {
      state.isRequestingRefund = true;
      state.isRequestingRefundSucces = false;
      state.currentOrder = action.payload.orderId;
    },
    refundSuccess: (state, action) => {
      state.isRequestingRefund = false;
      state.isRequestingRefundSucces = true;
      state.currentOrder = '';
    },
    refundFailure: (state, action) => {
      state.isRequestingRefund = false;
      state.requestingRefundError = action.payload;
      state.isRequestingRefundSucces = false;
      state.currentOrder = '';
    },

    confirmOrder: (state, action) => {
      state.isConfirmingOrder = true;
      state.isConfirmingSucces = false;
      state.currentOrder = action.payload.orderId;
    },
    confirmOrderSuccess: (state, action) => {
      state.isConfirmingOrder = false;
      state.isConfirmingSucces = true;
      state.currentOrder = '';
    },
    confirmOrderFailure: (state, action) => {
      state.isConfirmingOrder = false;
      state.isConfirmingSucces = false;
      state.confirmingOrderError = action.payload;
      state.currentOrder = '';
    },

    extend: (state, action) => {
      state.isExtendingOrder = true;
      state.isExtendingSucces = false;
      state.currentOrder = action.payload.orderId;
    },
    extendSuccess: (state, action) => {
      state.isExtendingOrder = false;
      state.isExtendingSucces = true;
      state.currentOrder = '';
    },
    extendFailure: (state, action) => {
      state.isExtendingOrder = false;
      state.isExtendingSucces = false;
      state.extendingOrderError = action.payload;
      state.currentOrder = '';
    },
    resetState: (state) => {
      state.isConfirmingSucces = false;
      state.isExtendingSucces = false;
      state.isRequestingRefundSucces = false;
      state.currentOrder = '';
    },
  },
});

export const { actions: NearbyPharmacyAction } = slice;

export const useOrderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: orderSaga });
  return { actions: slice.actions };
};
