import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../app/screens/cart';
import Home from '../app/screens/nearbyPharmacies';
import CheckOut from '../app/screens/checkout';
import DrugDetail from '../app/screens/drugDetail';
import DrugSearch from '../app/screens/drugSearch';
import ResetPassword from '../app/screens/ResetPassword';
import Login from '../app/screens/login';
import Notification from '../app/screens/notification';
import PharmacyDetail from '../app/screens/pharmacyDetail';
import ForgetPassword from '../app/screens/ForgetPassword';
import SignUp from '../app/screens/signup';
import SuccessScreen from '../app/screens/SuccessScreen';
import UserProfile from '../app/screens/userProfile';
import VerifyOtp from '../app/screens/verifyOtp';
import CartEmpty from '../app/screens/CartEmpty';
import CheckOutSuccess from '../app/screens/CheckOutSuccess';
import NotFound from '../app/screens/NotFound';
import Offline from '../app/screens/Offline';
import UpdateProfile from '../app/screens/UpdateProfile';
// import WalkThroughScreen from '../app/screens/WalkThrough';
import OnboardingScreen from '../app/screens/OnboardingScreen';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// import FistoIcon from 'react-native-vector-icons/Fontisto';
import useInitialAppLaunch from '../utils/hooks/useInitialAppLaunch';
import { useNavigation } from '@react-navigation/native';
import {
  HomeStackParamList,
  DrugSearchStackParamList,
  TabParamList,
  RootStackParamList,
  ProfileStackParamList,
} from './types';

export default function DefaultLayout() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <RootNavigator />
      </View>
    </NavigationContainer>
  );
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="PharmacyDetail" component={PharmacyDetail} />
      <HomeStack.Screen name="DrugSearch" component={DrugSearch} />
    </HomeStack.Navigator>
  );
}

const DrugSearchStack = createNativeStackNavigator<DrugSearchStackParamList>();

function DrugSearchStackScreen() {
  return (
    <DrugSearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrugSearchStack.Screen name="DrugSearch" component={DrugSearch} />
      <DrugSearchStack.Screen name="DrugDetail" component={DrugDetail} />
      <DrugSearchStack.Screen name="Cart" component={Cart} />
    </DrugSearchStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={UserProfile} />
      <ProfileStack.Screen name="EditProfile" component={UpdateProfile} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator<TabParamList>();
function Tabs() {
  const tabIcons: { [K in keyof TabParamList]: string } = {
    HomeTab: 'home',
    DrugSearchTab: 'search1',
    ProfileTab: 'user',
    RootTab: 'home',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = tabIcons[route.name];
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ color, focused }) => {
          let label = '';

          // Customize the label based on the route name
          if (route.name === 'HomeTab') {
            label = 'Home';
          } else if (route.name === 'DrugSearchTab') {
            label = 'Search';
          } else if (route.name === 'ProfileTab') {
            label = 'Profile';
          }

          return (
            <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
              {label}
            </Text>
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true, // Set to true to show the custom tab bar label
        tabBarStyle: { backgroundColor: 'white' },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} />
      <Tab.Screen name="DrugSearchTab" component={DrugSearchStackScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  useInitialAppLaunch(
    () => navigation.navigate('RootTab'), // Navigate to home screen if logged in
    () => navigation.navigate('WalkThrough'), // Navigate to login screen if not logged in
  );

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="WalkThrough" component={OnboardingScreen} />
      <RootStack.Screen name="RootTab" component={Tabs} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="ForgotPassword" component={ForgetPassword} />
      <RootStack.Screen name="ResetPassword" component={ResetPassword} />
      <RootStack.Screen name="SignUp" component={SignUp} />
      <RootStack.Screen name="SuccessScreen" component={SuccessScreen} />
      <RootStack.Screen name="VerifyOtp" component={VerifyOtp} />
      <RootStack.Screen name="Cart" component={Cart} />
      <RootStack.Screen name="CheckOut" component={CheckOut} />
      <RootStack.Screen name="CheckOutSuccess" component={CheckOutSuccess} />
      <RootStack.Screen name="Notification" component={Notification} />
      <RootStack.Screen name="CartEmpty" component={CartEmpty} />
      <RootStack.Screen name="NotFound" component={NotFound} />
      <RootStack.Screen name="Offline" component={Offline} />
    </RootStack.Navigator>
  );
}
