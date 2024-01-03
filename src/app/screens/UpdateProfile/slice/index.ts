/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { UserProfileUpdateSaga } from './saga';
import { IinitialUserProfileUpdateState } from './types';
import Toast from 'react-native-root-toast';

export const initialState: IinitialUserProfileUpdateState = {
  updateSuccessMsg: '',
  updateErrorMessage: '',
  isUpdating: false,
};

const slice = createSlice({
  name: 'userProfileUpdateScreen',
  initialState,
  reducers: {
    updateUserProfile(state, action) {
      state.isUpdating = true;
    },
    updateUserProfileSuccess(state, action) {
      state.isUpdating = false;
      state.updateSuccessMsg = action.payload.message;

      Toast.show(state.updateSuccessMsg, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    },
    updateUserProfileError(state, action) {
      state.isUpdating = false;
      state.updateErrorMessage = action.payload;
      Toast.show('user Update failed because: ' + state.updateErrorMessage, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    },
  },
});

export const { actions: userProfileScreenAction } = slice;

export const useUserProfileUpdateScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: UserProfileUpdateSaga });
  return { actions: slice.actions };
};
