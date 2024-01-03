/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { UserProfileSaga } from './saga';
import { IinitialUserProfileState } from './types';
import Toast from 'react-native-root-toast';

export const initialState: IinitialUserProfileState = {
  user: {
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    avatar: '',
    coverPhoto: '',
    location: {
      type: '',
      coordinates: [0, 0],
    },
  },
  isLoadingUserProfile: false,
};

const slice = createSlice({
  name: 'userProfileScreen',
  initialState,
  reducers: {
    getUserProfile(state, action) {
      state.isLoadingUserProfile = true;
    },
    getUserProfileSuccess(state, action) {
      state.isLoadingUserProfile = false;
      state.user = action.payload;
    },
    getUserProfileError(state, action) {
      state.isLoadingUserProfile = false;
    },
  },
});

export const { actions: userProfileScreenAction } = slice;

export const useUserProfileScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: UserProfileSaga });
  return { actions: slice.actions };
};
