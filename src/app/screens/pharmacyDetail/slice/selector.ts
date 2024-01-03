import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '../../drugDetail/slice';

const selectSlice = (state: RootState) => state?.pharmacyDetailScreen || initialState;

export const selectPharmacy = createSelector([selectSlice], (state) => state.pharmacyDetail);
