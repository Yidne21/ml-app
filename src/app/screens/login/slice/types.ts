export interface IinitialLoginState {
  isLoging: boolean;
  token: string;
}
export interface ILoginPayload {
  phonenumber: string;
  password: string;
}
export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phonenumber: string;
  role: string;
}
export interface ILoginError {
  message: string;
}
