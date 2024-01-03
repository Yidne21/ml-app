export interface IinitialverifyOtpState {
  isSendingOtp: boolean;
  validOtp: boolean;
}

export interface IverifyOtpPayload {
  code: number;
  phoneNumber: string;
}
