import { useEffect } from 'react';
import { getData } from '../configs/asyncStorage';

export default function useInitialAppLaunch(loggedIn: () => void, notLoggedIn: () => void) {
  useEffect(() => {
    async function getAppStatus() {
      try {
        const user = await getData('userData');
        if (!user) {
          notLoggedIn();
          return;
        }
        loggedIn();
        return;
      } catch (e) {
        console.warn(e);
      }
    }
    getAppStatus();
  }, [loggedIn, notLoggedIn]);
}
