export interface IinitialUserProfileUpdateState {
  updateSuccessMsg: string;
  updateErrorMessage: string;
  isUpdating: boolean;
}

export interface IupdateUserProfilePayload {
  userId: string;
  userData: {
    email?: string;
    address?: string;
    avatar?: string;
    coverPhoto?: string;
    oldPassword?: string;
    newPassword?: string;
  };
}
