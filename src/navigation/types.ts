import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Declare additional types as needed

// Home Stack Navigator
/**
 * Represents the parameter list for the Home stack navigation.
 */
export type HomeStackParamList = {
  Home: undefined;
  PharmacyDetail: { pharmacyId: string };
  DrugSearch: { pharmacyId: string };
};

/**
 * Type definition for the props of screens in the HomeStack.
 * @template Screen - The key of the screen in the HomeStackParamList.
 */
export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  Screen
>;

// Drug Search Stack Navigator
/**
 * Represents the parameter list for the DrugSearchStack navigation stack.
 */
export type DrugSearchStackParamList = {
  DrugSearch: { name: string };
  DrugDetail: { drugId: string; stockId: string };
  Cart: undefined;
};

/**
 * Represents the props for a screen in the DrugSearchStack.
 * @template Screen - The available screens in the DrugSearchStack.
 */
export type DrugSearchStackScreenProps<Screen extends keyof DrugSearchStackParamList> =
  NativeStackScreenProps<DrugSearchStackParamList, Screen>;

// profile stack navigator
/**
 * Represents the parameter list for the profile stack navigation.
 * @template Screen - The screen key of the profile stack.
 */

export type ProfileStackParamList = {
  Profile: { userId: string };
  EditProfile: { userId: string };
};

/**
 * Represents the props for the profile stack screen.
 * @template Screen - The screen key of the profile stack.
 */
export type ProfileStackScreenProps<Screen extends keyof ProfileStackParamList> =
  NativeStackScreenProps<ProfileStackParamList, Screen>;

// Tab Navigator
/**
 * Represents the parameter list for the tabs in the navigation.
 */
export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  DrugSearchTab: NavigatorScreenParams<DrugSearchStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
  RootTab: undefined;
};

/**
 * Type definition for the props of a tab screen.
 * @template Screen - The screen key of the tab.
 */
export type TabScreenProps<Screen extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  Screen
>;

// Root Stack Navigator
/**
 * Represents the parameter list for the root stack navigation.
 */
export type RootStackParamList = {
  Splash: undefined;
  WalkThrough: undefined;
  RootTab: NavigatorScreenParams<TabParamList> | undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: { email: string };
  SignUp: undefined;
  SuccessScreen: { message: string; title: string };
  VerifyOtp: { prevRoute: string; email: string };
  Cart: undefined;
  CheckOut: undefined;
  CheckOutSuccess: undefined;
  UserProfile: undefined;
  Notification: undefined;
  CartEmpty: undefined;
  NotFound: undefined;
  Offline: undefined;
};

/**
 * Represents the props for the root stack screen.
 * @template Screen - The screen key of the root stack.
 */
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
