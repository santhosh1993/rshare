import {useCallback} from 'react';
import {useGoogle} from '../google/useGoogle';

export const useLogin = () => {
  const {} = useGoogle();
  const singIn = useCallback(() => {
    try {
    } catch (e) {}
  }, []);
  return {singIn};
};
