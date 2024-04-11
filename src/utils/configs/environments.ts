// import {
//   DEV_BASE_URL,
//   API_KEY,
//   AUTH_DOMAIN,
//   PROJECT_ID,
//   STORAGE_BUCKET,
//   MESSAGING_SENDER_ID,
//   APP_ID,
//   MEASUREMENT_ID,
// } from '@env';
import Constants from 'expo-constants';

export const Base_url = process.env.API_URL || Constants?.expoConfig?.extra?.API_URL;
export const Api_key = process.env.API_KEY || Constants?.expoConfig?.extra?.API_KEY;
export const Auth_domain = process.env.AUTH_DOMAIN || Constants?.expoConfig?.extra?.AUTH_DOMAIN;
export const Project_id = process.env.PROJECT_ID || Constants?.expoConfig?.extra?.PROJECT_ID;
export const Storage_bucket =
  process.env.STORAGE_BUCKET || Constants?.expoConfig?.extra?.STORAGE_BUCKET;
export const Messaging_sender_id =
  process.env.MESSAGING_SENDER_ID || Constants?.expoConfig?.extra?.MESSAGING_SENDER_ID;
export const App_id = process.env.APP_ID || Constants?.expoConfig?.extra?.APP_ID;
export const Measurement_id =
  process.env.MEASUREMENT_ID || Constants?.expoConfig?.extra?.MEASUREMENT_ID;
