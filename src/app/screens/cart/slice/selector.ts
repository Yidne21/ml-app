import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.cartScreen || initialState;
export const selectCart = createSelector([selectSlice], (state) => state.cartDetail);
export const selectIsLoading = createSelector([selectSlice], (state) => state.isLoading);
export const selectCheckOutUrl = createSelector([selectSlice], (state) => state.chapaCheckOutUrl);
export const selectIsCheckOutLoading = createSelector(
  [selectSlice],
  (state) => state.isCheckingOut,
);
export const selectIsCheckOutSuccess = createSelector(
  [selectSlice],
  (state) => state.isCheckOutSuccess,
);
export const selectIsCheckOutError = createSelector([selectSlice], (state) => state.chapaError);
export const selectIsOrderCreating = createSelector(
  [selectSlice],
  (state) => state.isOrderCreating,
);
export const selectIsOrderCreated = createSelector([selectSlice], (state) => state.isOrderCreated);
export const selectCreateOrderError = createSelector(
  [selectSlice],
  (state) => state.createOrderError,
);
