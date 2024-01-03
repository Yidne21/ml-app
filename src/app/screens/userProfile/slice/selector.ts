import { RootState } from '../../../../types';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectSlice = (state: RootState) => state?.userProfileScreen || initialState;

export const selectUser = createSelector([selectSlice], (state) => state.user);
export const selectIsLoading = createSelector([selectSlice], (state) => state.isLoadingUserProfile);
