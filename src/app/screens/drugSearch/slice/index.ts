/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { drugSearchSaga } from './saga';
import { IinitialDrugSearchState } from './types';

export const initialState: IinitialDrugSearchState = {
  isSearching: false,
  searchResult: undefined,
};

const slice = createSlice({
  name: 'drugSearchScreen',
  initialState,
  reducers: {
    getSearchedDrug: (state, action) => {
      console.log('action.payload----', action.payload);
      state.isSearching = true;
    },
    getSearchedDrugSuccess: (state, action) => {
      console.log('success', action.payload);
      state.searchResult = action.payload;
      console.log('-----------success state---- ', state.searchResult);
      state.isSearching = false;
    },
    getSearchedDrugFailure: (state, action) => {
      console.log('error', action.payload);
    },
  },
});

export const { actions: drugSearchScreenAction } = slice;

export const useDrugSearchScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: drugSearchSaga });
  return { actions: slice.actions };
};
