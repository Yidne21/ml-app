/* eslint-disable no-undef */
import 'dotenv/config';

export default {
  expo: {
    name: 'ml-app',
    slug: 'ml-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.yidnekachewb.mlapp',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './src/assets/images/icon.png',
    },
    plugins: [
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos to let you share them with your friends.',
        },
      ],
      [
        'expo-location',
        {
          locationAlwaysAndWhenInUsePermission: 'Allow Medicin Locator app to use your location.',
        },
      ],
    ],
    extra: {
      eas: {
        projectId: '331f7f28-0985-40bd-98af-c8e6580dd87e',
      },
      API_URL: process.env.API_URL ?? 'https://medicin-locator-service.onrender.com',
    },
    owner: 'yidnekachewb',
  },
};
