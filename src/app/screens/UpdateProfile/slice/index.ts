/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '../../../../utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../utils/redux-injectors';
import { UserProfileUpdateSaga } from './saga';
import { IinitialUserProfileUpdateState } from './types';
import Toast from 'react-native-root-toast';
import { storeData } from '../../../../utils/configs/asyncStorage';

export const initialState: IinitialUserProfileUpdateState = {
  updateSuccessMsg: '',
  updateErrorMessage: '',
  isUpdating: false,
  isUpdated: false,
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
      state.isUpdated = true;
      state.updateSuccessMsg = action.payload.message;
      storeData('userData', action.payload.user);
      console.log('userProfileUpdateScreenSlice', action.payload.user);

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
    resetUpdateUserProfile(state) {
      state.isUpdating = false;
      state.isUpdated = false;
      state.updateSuccessMsg = '';
      state.updateErrorMessage = '';
    },
  },
});

export const { actions: userProfileScreenAction } = slice;

export const useUserProfileUpdateScreenSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: UserProfileUpdateSaga });
  return { actions: slice.actions };
};
