import { useEffect, useState } from 'react';
import { getData } from '../configs/asyncStorage';
import { IUser } from '../../app/screens/userProfile/slice/types';

export default function useStoredUserData() {
  const [user, setUser] = useState({} as IUser);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        console.log('Loading resources');
        const user = await getData('userData');
        setUser(user);
      } catch (e) {
        console.warn(e);
      } finally {
        console.log('Done.');
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return user;
}
