export interface IinitialUserProfileUpdateState {
  updateSuccessMsg: string;
  updateErrorMessage: string;
  isUpdating: boolean;
  isUpdated: boolean;
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

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  coverPhoto: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
