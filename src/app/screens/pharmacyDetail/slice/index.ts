/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { PharmacyDetailSaga } from './saga';
import { IinitialPharmacyDetailState } from './types';

export const initialState: IinitialPharmacyDetailState = {
  isLoadingPharmacy: false,
  pharmacyDetail: undefined,
};

const slice = createSlice({
  name: 'pharmacyDetailScreen',
  initialState,
  reducers: {
    getPharmacyDetail: (state, action) => {
      state.isLoadingPharmacy = true;
      console.log('action.payload', action.payload);
    },
    getPharmacyDetailSuccess: (state, action) => {
      state.isLoadingPharmacy = false;
      state.pharmacyDetail = action.payload;
      console.log('state.pharmacyDetail', state.pharmacyDetail);
    },
    getPharmacyDetailFailure: (state, action) => {
      state.isLoadingPharmacy = false;
      state.pharmacyDetail = action.payload;
      console.log('state.error', action.payload);
    },
  },
});

export const { actions: PharmacyDetailAction } = slice;

export const usePharmacyDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: PharmacyDetailSaga });
  return { actions: slice.actions };
};
