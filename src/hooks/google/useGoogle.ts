import {useCallback} from 'react';
import {useGoogleStore} from './store/googleStore';
import {useGoogleAuth} from './useGoogleAuth';
import {useGoogleDrive} from './useGoogleDrive';

export const useGoogle = () => {
  const data = useGoogleStore(s => s);
  const auth = useGoogleAuth();
  const drive = useGoogleDrive();
  const createFolder = useCallback(
    async (folderName: string) => {
      try {
        const data = await auth.authenticate();
        await drive.createFolder(folderName);
      } catch (e) {}
    },
    [auth, drive],
  );
  return {createFolder};
};
