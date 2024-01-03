export interface IinitialSignUpState {
  isSigning: boolean;
  user?: IUser | undefined;
}

export interface IsignUpPayload {
  user: IUser;
}
export interface IUser {
  name: string;
  phoneNumber: string;
  password: string;
  role: string;
}
