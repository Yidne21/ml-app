import { RootState } from '../../../../types';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state?.userProfileUpdateScreen || initialState;

export const selectUpdateSuccessMsg = createSelector(
  [selectSlice],
  (state) => state.updateSuccessMsg,
);
export const selectUpdateErrorMessage = createSelector(
  [selectSlice],
  (state) => state.updateErrorMessage,
);

export const selectIsUpdating = createSelector([selectSlice], (state) => state.isUpdating);
