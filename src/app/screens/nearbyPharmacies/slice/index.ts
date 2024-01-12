/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { NearbyPharmacySaga } from './saga';
import {
  IinitialNearbyPharmaciesState,
  InearbyPharmacies,
  IgetNearbyPharmaciesPayload,
} from './types';

export const initialState: IinitialNearbyPharmaciesState = {
  isLoadingNearbyPharmacies: false,
  isLoadedNearbyPharmacies: false,
  nearbyPharmacies: {
    totalDocuments: 0,
    totalPages: 0,
    pharmacies: [],
  },
};

const slice = createSlice({
  name: 'nearbyPharmacyScreen',
  initialState,
  reducers: {
    getNearbyPharmacies: (state, action: PayloadAction<IgetNearbyPharmaciesPayload>) => {
      state.isLoadingNearbyPharmacies = true;
    },
    getNearbyPharmaciesSuccess: (state, action: PayloadAction<InearbyPharmacies>) => {
      state.isLoadingNearbyPharmacies = false;
      state.isLoadedNearbyPharmacies = true;
      state.nearbyPharmacies = action.payload;
    },
    getNearbyPharmaciesFailure: (state, action: PayloadAction) => {},

    getSearchedNearbyPharmacies: (state, action: PayloadAction<IgetNearbyPharmaciesPayload>) => {
      state.isLoadingNearbyPharmacies = true;
    },
    getSearchedNearbyPharmaciesSuccess: (state, action: PayloadAction<InearbyPharmacies>) => {},
    getSearchedNearbyPharmaciesFailure: (state, action: PayloadAction) => {},
  },
});

export const { actions: NearbyPharmacyAction } = slice;

export const useNearbyPharmacySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: NearbyPharmacySaga });
  return { actions: slice.actions };
};
