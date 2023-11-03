import {useGoogleAuth} from './useGoogleAuth';
import {useGoogleDrive} from './useGoogleDrive';

export const useGoogle = () => {
  const auth = useGoogleAuth();
  const drive = useGoogleDrive();

  return {...auth, ...drive};
};
