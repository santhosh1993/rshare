import {useEffect, useState} from 'react';
import {InteractionManager} from 'react-native';

export const useTransitionDone = (loading?: boolean) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const runnable = InteractionManager.runAfterInteractions(() => {
      setLoaded(true);
    });

    return () => {
      runnable.cancel();
    };
  });

  return (typeof loading === 'boolean' ? loading : true) && loaded;
};
