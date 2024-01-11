import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types/RootState';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.drugSearchScreen || initialState;

export const selectSearchResult = createSelector([selectSlice], (state) => state.searchResult);
export const selectIsSearching = createSelector([selectSlice], (state) => state.isSearching);
export const selectIsSuccessful = createSelector([selectSlice], (state) => state.isSuccessful);
export const selectErrorMsg = createSelector([selectSlice], (state) => state.errorMsg);
