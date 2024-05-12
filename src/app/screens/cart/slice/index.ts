/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { drugDetailSaga } from './saga';
import { IinitialDrugDetailState } from './types';

export const initialState: IinitialDrugDetailState = {
  isLoadingDrugDetail: false,
  drugDetail: {
    _id: '',
    drugPhoto: [],
    needPrescription: false,
    name: '',
    category: '',
    price: 0,
    stockLevel: 0,
    recivedFrom: '',
    instruction: '',
    sideEffects: '',
    strength: '',
    dosage: '',
    stock: {
      _id: '',
      price: 0,
      recievedFrom: '',
      expiredDate: new Date(),
      quantity: '',
      currentQuantity: '',
      status: '',
      cost: 0,
      batchNumber: '',
    },
    pharmacy: {
      _id: '',
      name: '',
      location: {
        type: '',
        coordinates: [37, 9],
      },
    },
  },
  isLoaded: false,
  isAddingToCart: false,
  cartAddSuccessMsg: '',
};

const slice = createSlice({
  name: 'drugDetailScreen',
  initialState,
  reducers: {
    getDrugDetail: (state, action) => {
      state.isLoadingDrugDetail = true;
      console.log(action.type);
    },
    getDrugDetailSuccess: (state, action) => {
      state.drugDetail = action.payload;
      state.isLoadingDrugDetail = false;
      state.isLoaded = true;
    },
    getDrugDetailFailur: (state, action) => {
      state.isLoadingDrugDetail = false;
      state.isLoaded = false;
    },
    addToCart: (state, action) => {
      state.isAddingToCart = true;
      state.cartAddSuccessMsg = '';
    },
    addToCartSuccess: (state, action) => {
      state.isAddingToCart = false;
      const { success } = action.payload;
      state.cartAddSuccessMsg = success;
      console.log(state.cartAddSuccessMsg);
    },
    addToCartFailur: (state, action) => {
      state.isAddingToCart = false;
      state.cartAddSuccessMsg = action.payload;
      console.log(state.cartAddSuccessMsg);
    },
  },
});

export const { actions: drugDetailAction } = slice;

export const useDrugDetailScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: drugDetailSaga });
  return { actions: slice.actions };
};
