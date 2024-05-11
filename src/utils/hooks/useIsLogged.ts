import { useEffect, useState } from 'react';
import { getData } from '../configs/asyncStorage';

export default function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await getData('userData');

      if (user) {
        setIsLoggedIn(true);
      }
    })();
  }, []);

  return isLoggedIn;
}
