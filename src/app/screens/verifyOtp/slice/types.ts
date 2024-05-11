export interface IinitialverifyOtpState {
  isSendingOtp: boolean;
  validOtp: boolean;
  errorMessage: string;
}

export interface IverifyOtpPayload {
  code: number;
  email: string;
}
