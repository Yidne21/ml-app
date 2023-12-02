// import { LoginState } from 'app/screens/login/slice/types';
// import { LandingScreenState } from 'app/screens/landingScreen/slice/types';
// import { SignUpState } from 'app/screens/signUp/slice/types';
// import { SearchState } from 'app/screens/search/slice/types';
/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // login?: LoginState;
  // landingScreen?: LandingScreenState;
  // signUp?: SignUpState;
  // search?: SearchState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
