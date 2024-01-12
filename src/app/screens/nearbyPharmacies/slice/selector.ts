import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.nearbyPharmacyScreen || initialState;

export const selectPharmacies = createSelector([selectSlice], (state) => state.nearbyPharmacies);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.isLoadingNearbyPharmacies,
);
export const selectIsLoaded = createSelector(
  [selectSlice],
  (state) => state.isLoadedNearbyPharmacies,
);
