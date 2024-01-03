import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { configureAppStore } from './store/configureStore';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './utils/theme/theme';
import DefaultLayout from './navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomeFonts from './utils/configs/CustomeFonts';
import * as SplashScreen from 'expo-splash-screen';
import { RootSiblingParent } from 'react-native-root-siblings';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { store } = configureAppStore();

  return (
    <CustomeFonts>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RootSiblingParent>
                <DefaultLayout />
              </RootSiblingParent>
            </GestureHandlerRootView>
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </CustomeFonts>
  );
}
