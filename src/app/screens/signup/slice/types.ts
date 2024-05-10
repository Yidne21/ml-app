export interface IinitialSignUpState {
  isSigning: boolean;
  user?: IUser | undefined;
  isSigned: boolean;
  errorMsg: string;
}

export interface IsignUpPayload {
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
}
