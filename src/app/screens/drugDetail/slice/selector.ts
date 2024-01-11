import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.drugDetailScreen || initialState;
export const selectDrugDetail = createSelector([selectSlice], (state) => state.drugDetail);
export const selectIsLoadingDrugDetail = createSelector(
  [selectSlice],
  (state) => state.isLoadingDrugDetail,
);
export const selectIsLoaded = createSelector([selectSlice], (state) => state.isLoaded);
