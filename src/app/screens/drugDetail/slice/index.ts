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
    ingredients: [],
    needPrescription: false,
    name: '',
    category: '',
    price: 0,
    stockLevel: 0,
    recivedFrom: '',
    instruction: '',
    sideEffects: '',
    strengthAndDosage: '',
    manufacturedDate: '',
    expiredDate: '',
    receivedFrom: '',
  },
  isLoaded: false,
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
      console.log('drugDetail', action.payload);
      state.isLoadingDrugDetail = false;
      state.isLoaded = true;
    },
    getDrugDetailFailur: (state, action) => {
      state.isLoadingDrugDetail = false;
      state.isLoaded = false;
    },
  },
});

export const { actions: drugDetailAction } = slice;

export const useDrugDetailScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: drugDetailSaga });
  return { actions: slice.actions };
};
