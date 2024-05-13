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
