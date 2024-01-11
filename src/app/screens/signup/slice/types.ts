export interface IinitialSignUpState {
  isSigning: boolean;
  user?: IUser | undefined;
  isSigned: boolean;
  errorMsg: string;
}

export interface IsignUpPayload {
  name: string;
  phoneNumber: string;
  password: string;
  role: string;
}
export interface IUser {
  name: string;
  phoneNumber: string;
  password: string;
  role: string;
}
