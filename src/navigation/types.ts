/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type ReservationRequestsStackParamList = {
  ReservationRequestsList: undefined;
  IndividualReservationRequestList: { eventId: string };
  SpecialRequestList: undefined;
};

export type LandingScreenStackParamList = {
  LandingScreen: undefined;
  Map: undefined;
};

export type RootStackParamList = {
  LoadingScreen: undefined;
  IntroScreen: undefined;
  RootTab: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: undefined;
  SignUp: undefined | { id: string };
  TripDetail: { id: string };
  ReserveEvent: { id: string; reservationId?: string; editMode?: boolean };
  Profile: { id: string } | undefined;
  CreateTrip: { eventId: string } | undefined;
  subAccounts: undefined;
  Favorites: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Search: { searchParam: {} } | undefined;
  ReservedEvents: undefined;
  ReservationRequests: NavigatorScreenParams<ReservationRequestsStackParamList> | undefined;
  Landing: NavigatorScreenParams<LandingScreenStackParamList>;
};
