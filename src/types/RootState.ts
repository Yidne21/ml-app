import { IinitialNearbyPharmaciesState } from '../app/screens/nearbyPharmacies/slice/types';
import { IinitialDrugDetailState } from '../app/screens/drugDetail/slice/types';
import { IinitialDrugSearchState } from '../app/screens/drugSearch/slice/types';
import { IinitialverifyOtpState } from '../app/screens/verifyOtp/slice/types';
import { IinitialUserProfileState } from '../app/screens/userProfile/slice/types';
import { IinitialSignUpState } from '../app/screens/signup/slice/types';
import { IinitialResetPasswordState } from '../app/screens/resetPassword/slice/types';
import { IinitialPharmacyDetailState } from '../app/screens/pharmacyDetail/slice/types';
import { IinitialLoginState } from '../app/screens/login/slice/types';
import { IinitialForgotPasswordState } from '../app/screens/forgotPassword/slice/types';
export interface RootState {
  nearbyPharmacyScreen: IinitialNearbyPharmaciesState;
  drugDetailScreen: IinitialDrugDetailState;
  drugSearchScreen: IinitialDrugSearchState;
  verifyOtpScreen: IinitialverifyOtpState;
  userProfileScreen: IinitialUserProfileState;
  signUpScreen: IinitialSignUpState;
  resetPasswordScreen: IinitialResetPasswordState;
  pharmacyDetailScreen: IinitialPharmacyDetailState;
  loginScreen: IinitialLoginState;
  forgotPasswordScreen: IinitialForgotPasswordState;
}
