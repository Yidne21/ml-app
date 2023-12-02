import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../app/screens/cart';
import Home from '../app/screens/home';
import CheckOut from '../app/screens/checkout';
import DrugDetail from '../app/screens/drugDetail';
import DrugSearch from '../app/screens/drugSearch';
import ForgotPassword from '../app/screens/forgotPassword';
import Login from '../app/screens/login';
import Notification from '../app/screens/notification';
import PharmacyProfile from '../app/screens/pharmacyProfile';
import ResetPassword from '../app/screens/resetPassword';
import SignUpSuccess from '../app/screens/SignUpSuccess';
import SignUp from '../app/screens/signup';
import UserProfile from '../app/screens/userProfile';
import VerifyOtp from '../app/screens/verifyOtp';
import CartEmpty from '../app/screens/CartEmpty';
import CheckOutSuccess from '../app/screens/CheckOutSuccess';
import NotFound from '../app/screens/NotFound';
import Offline from '../app/screens/Offline';
import SplashScreen from '../app/screens/SplashScreen';
import WalkThroughScreen from '../app/screens/WalkThrough';

export default function DefaultLayout() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="PharmacyProfile" component={PharmacyProfile} />
      <HomeStack.Screen name="DrugSearch" component={DrugSearch} />
    </HomeStack.Navigator>
  );
}

const DrugSearchStack = createNativeStackNavigator();

function DrugSearchStackScreen() {
  return (
    <DrugSearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrugSearchStack.Screen name="DrugSearch" component={DrugSearch} />
      <DrugSearchStack.Screen name="DrugDetail" component={DrugDetail} />
    </DrugSearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="DrugSearch" component={DrugSearchStackScreen} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WalkThrough" component={WalkThroughScreen} />
      <Stack.Screen name="RootTap" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="CheckOutSuccess" component={CheckOutSuccess} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="CartEmpty" component={CartEmpty} />
      <Stack.Screen name="NotFound" component={NotFound} />
      <Stack.Screen name="Offline" component={Offline} />
    </Stack.Navigator>
  );
}
