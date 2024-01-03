import { registerRootComponent } from 'expo';
import App from './src/App';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './src/utils/configs/firbaseConfig';

initializeApp(firebaseConfig);

registerRootComponent(App);
