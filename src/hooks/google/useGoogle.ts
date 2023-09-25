import {useCallback} from 'react';
import {useGoogleStore} from './store/googleStore';
import {useGoogleAuth} from './useGoogleAuth';
import {useGoogleDrive} from './useGoogleDrive';
import {useFireStore} from '../firestore/usefirestore';

export const useGoogle = () => {
  const data = useGoogleStore(s => s);
  const auth = useGoogleAuth();
  const drive = useGoogleDrive();
  const fireStore = useFireStore();
  const createFolder = useCallback(
    async (folderName: string) => {
      try {
        const data = await auth.authenticate();
        console.log('--->>>', data);
        if (data !== undefined) {
          await fireStore.createUser({
            userId: data.id,
            name: data.email,
            phoneNo: '89899900',
          });
        }
        await drive.createFolder(folderName);
      } catch (e) {}
    },
    [auth, drive, fireStore],
  );
  return {createFolder};
};
