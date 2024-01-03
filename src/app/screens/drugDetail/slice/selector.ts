import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.drugDetailScreen || initialState;
export const selectDrugDetail = createSelector([selectSlice], (state) => state.drugDetail);
