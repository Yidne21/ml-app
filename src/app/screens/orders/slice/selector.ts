import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.ordersScreen || initialState;

export const selectOrders = createSelector([selectSlice], (state) => state.orders);
export const selectIsLoadingOrders = createSelector(
  [selectSlice],
  (state) => state.isLoadingOrders,
);
export const selectIsLoadedOrders = createSelector([selectSlice], (state) => state.isLoadedOrders);
export const selectIsConfirmingOrder = createSelector(
  [selectSlice],
  (state) => state.isConfirmingOrder,
);
export const selectIsExtendingOrder = createSelector(
  [selectSlice],
  (state) => state.isExtendingOrder,
);
export const selectIsRequestingRefund = createSelector(
  [selectSlice],
  (state) => state.isRequestingRefund,
);
export const selectGetingOrdersError = createSelector(
  [selectSlice],
  (state) => state.getingOrdersError,
);
export const selectConfirmingOrderError = createSelector(
  [selectSlice],
  (state) => state.confirmingOrderError,
);
export const selectExtendingOrderError = createSelector(
  [selectSlice],
  (state) => state.extendingOrderError,
);
export const selectRequestingRefundError = createSelector(
  [selectSlice],
  (state) => state.requestingRefundError,
);
export const selectIsConfirmingSucces = createSelector(
  [selectSlice],
  (state) => state.isConfirmingSucces,
);
export const selectIsExtendingSucces = createSelector(
  [selectSlice],
  (state) => state.isExtendingSucces,
);
export const selectIsRequestingRefundSucces = createSelector(
  [selectSlice],
  (state) => state.isRequestingRefundSucces,
);
export const selectCurrentOrder = createSelector([selectSlice], (state) => state.currentOrder);
