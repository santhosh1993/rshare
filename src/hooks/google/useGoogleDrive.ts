import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {useCallback} from 'react';

export const useGoogleDrive = () => {
  const createRootFolder = useCallback(async () => {
    try {
      const tokens = await GoogleSignin.getTokens();
      const response = await axios.get(
        'https://www.googleapis.com/drive/v3/files',
        {
          params: {
            q: "mimeType='application/vnd.google-apps.folder'",
          },
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        },
      );

      const folders = response.data.files;
      console.log('List of folders:', folders);
    } catch (error) {
      console.error('Error listing folders:', error);
      if (error.response) {
        console.error(
          'Error response:',
          error.response.status,
          error.response.data,
        );
      } else {
        console.error('Error:', error.message);
      }
    }
  }, []);

  const createFolder = useCallback(
    async (folderName: string) => {
      await createRootFolder();
    },
    [createRootFolder],
  );

  return {createFolder};
};
