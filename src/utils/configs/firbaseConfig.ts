import * as environment from '../../utils/configs/environments';

const firebaseConfig = {
  apiKey: environment.Api_key,
  authDomain: environment.Auth_domain,
  projectId: environment.Project_id,
  storageBucket: environment.Storage_bucket,
  messagingSenderId: environment.Messaging_sender_id,
  appId: environment.App_id,
  measurementId: environment.Measurement_id,
};

// const app = initializeApp(firebaseConfig);

export default firebaseConfig;
