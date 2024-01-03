export interface IinitialResetPasswordState {
  isResettingPassword: boolean;
}

export interface IResetPasswordPayload {
  user: IUser;
}
export interface IUser {
  phoneNumber: string;
  newPassword: string;
}
