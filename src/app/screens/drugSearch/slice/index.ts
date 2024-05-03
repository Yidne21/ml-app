/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { drugSearchSaga } from './saga';
import { IinitialDrugSearchState } from './types';

export const initialState: IinitialDrugSearchState = {
  isSearching: false,
  isSuccessful: false,
  errorMsg: '',
  searchResult: {
    totalDocuments: 0,
    totalPages: 0,
    data: [],
  },
};

const slice = createSlice({
  name: 'drugSearchScreen',
  initialState,
  reducers: {
    getSearchedDrug: (state, action) => {
      state.isSearching = true;
    },
    getSearchedDrugSuccess: (state, action) => {
      state.searchResult = action.payload;
      state.isSearching = false;
      state.isSuccessful = true;
    },
    getSearchedDrugFailure: (state, action) => {
      state.isSearching = false;
      state.isSuccessful = false;
      state.errorMsg = action.payload;
    },
    resetSearchResult: (state) => {
      state.isSuccessful = false;
      state.errorMsg = '';
      state.isSearching = false;
    },
  },
});

export const { actions: drugSearchScreenAction } = slice;

export const useDrugSearchScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: drugSearchSaga });
  return { actions: slice.actions };
};
