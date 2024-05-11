export interface IinitialResetPasswordState {
  isResettingPassword: boolean;
  isReseted: boolean;
  errorMessage: string;
}

export interface IResetPasswordPayload {
  email: string;
  newPassword: string;
}
export interface IUser {
  phoneNumber: string;
  newPassword: string;
}
