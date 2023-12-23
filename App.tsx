import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { configureAppStore } from './src/store/configureStore';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/utils/theme/theme';
import DefaultLayout from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomeFonts from './src/utils/configs/CustomeFonts';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { store } = configureAppStore();

  return (
    <CustomeFonts>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <DefaultLayout />
            </GestureHandlerRootView>
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </CustomeFonts>
  );
}
