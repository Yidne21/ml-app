import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { configureAppStore } from './store/configureStore';
import DefaultLayout from './navigation';

export default function App() {
  const { store } = configureAppStore();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <DefaultLayout />
      </Provider>
    </SafeAreaProvider>
  );
}
