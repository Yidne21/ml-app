import { useFonts } from 'expo-font';
import { View } from 'react-native';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import React, { ReactNode } from 'react';

SplashScreen.preventAutoHideAsync();

interface CustomeFontsProps {
  children: ReactNode;
}

function CustomeFonts({ children }: CustomeFontsProps) {
  const [fontsLoaded] = useFonts({
    RobotoThin: require('../../assets/fonts/Roboto/Roboto-Thin.ttf'),
    RobotoRegular: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    RobotoMedium: require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    RobotoLight: require('../../assets/fonts/Roboto/Roboto-Light.ttf'),
    RobotoBold: require('../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    RobotoBlack: require('../../assets/fonts/Roboto/Roboto-Black.ttf'),
    NotoSansEtVr: require('../../assets/fonts/Noto_Sans_Ethiopic/NotoSansEthiopic-VariableFont.ttf'),
    NotoSansEthiopic: require('../../assets/fonts/Noto_Sans_Ethiopic/static/NotoSansEthiopic-Regular.ttf'),
    NotoSansEthiopicBold: require('../../assets/fonts/Noto_Sans_Ethiopic/static/NotoSansEthiopic-Bold.ttf'),
    NotoSansEthiopicSemiBold: require('../../assets/fonts/Noto_Sans_Ethiopic/static/NotoSansEthiopic-SemiBold.ttf'),
    NotoSansEthiopicThin: require('../../assets/fonts/Noto_Sans_Ethiopic/static/NotoSansEthiopic-Thin.ttf'),
    NotoSansEthiopicMedium: require('../../assets/fonts/Noto_Sans_Ethiopic/static/NotoSansEthiopic-Medium.ttf'),
    NotoSansEthiopicLight: require('../../assets/fonts/Noto_Sans_Ethiopic/static/NotoSansEthiopic-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}

export default CustomeFonts;
