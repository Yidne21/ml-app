/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { PharmacyDetailSaga } from './saga';
import { IinitialPharmacyDetailState } from './types';

export const initialState: IinitialPharmacyDetailState = {
  isLoadingPharmacy: false,
  pharmacyDetail: {
    _id: '',
    location: {
      coordinates: [0, 0],
    },
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    logo: '',
    socialMedia: {
      facebook: '',
      twitter: '',
    },
    reviews: [],
    avgRating: 0,
  },
  isLoadedPharmacy: false,
};

const slice = createSlice({
  name: 'pharmacyDetailScreen',
  initialState,
  reducers: {
    getPharmacyDetail: (state, action) => {
      state.isLoadingPharmacy = true;
    },
    getPharmacyDetailSuccess: (state, action) => {
      state.pharmacyDetail = action.payload;
      state.isLoadingPharmacy = false;
      state.isLoadedPharmacy = true;
    },
    getPharmacyDetailFailure: (state, action) => {
      state.isLoadingPharmacy = false;
      state.isLoadedPharmacy = false;
      state.pharmacyDetail = action.payload;
    },
  },
});

export const { actions: PharmacyDetailAction } = slice;

export const usePharmacyDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: PharmacyDetailSaga });
  return { actions: slice.actions };
};
