import {useCallback} from 'react';
import {useGoogleStore} from './store/googleStore';
import {useGoogleAuth} from './useGoogleAuth';

export const useGoogle = () => {
  const data = useGoogleStore(s => s);
  const authenticate = useCallback(() => {}, []);
  return {authenticate};
};
