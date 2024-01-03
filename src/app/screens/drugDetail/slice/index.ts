/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { drugDetailSaga } from './saga';
import { IinitialDrugDetailState } from './types';

export const initialState: IinitialDrugDetailState = {
  isLoadingDrugDetail: false,
  drugDetail: undefined,
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
      state.isLoadingDrugDetail = false;
      state.drugDetail = action.payload;
      console.log('success', state.drugDetail);
    },
    getDrugDetailFailur: (state, action) => {
      state.isLoadingDrugDetail = false;
      console.log(action.payload);
    },
  },
});

export const { actions: drugDetailAction } = slice;

export const useDrugDetailScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: drugDetailSaga });
  return { actions: slice.actions };
};
