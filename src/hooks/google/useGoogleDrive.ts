import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {useCallback} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

type GoogleFolder = {
  id: string;
  kind: string;
  mimeType: string;
  name: string;
};

export const useGoogleDrive = () => {
  const getFolder = useCallback(async (folderName: string) => {
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

  const createRootFolder = useCallback(async () => {
    try {
      getFolder('rshare');

      const tokens = await GoogleSignin.getTokens();
      const response = await axios.post(
        'https://www.googleapis.com/drive/v3/files',
        {
          name: 'rshare',
          mimeType: 'application/vnd.google-apps.folder',
        },
        {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Folder created:', response.data);
    } catch (error) {
      console.error('Error creating folder:', error);
    }
  }, [getFolder]);

  const createFolder = useCallback(
    async (folderName: string) => {
      await createRootFolder();
    },
    [createRootFolder],
  );

  const uploadFile = useCallback(
    async (localFilePath: string, mimeType: string, fileName: string) => {
      const tokens = await GoogleSignin.getTokens();
      const accessToken = tokens.accessToken;
      const url =
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': mimeType,
      };

      try {
        const response = await RNFetchBlob.fetch('POST', url, headers, [
          {
            name: 'name',
            data: JSON.stringify({
              name: fileName, // Set the desired file name
            }),
          },
          {
            name: 'file',
            filename: fileName,
            data: RNFetchBlob.wrap(localFilePath),
          },
        ]);

        if (response.respInfo.status === 200) {
          // File uploaded successfully
          console.log('File uploaded to Google Drive.', response.data);
          const fileData = JSON.parse(response.data);
          const fileId = fileData.id;
          return fileId;
        } else {
          // Handle error
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
    [],
  );

  const changeAccessToPublic = useCallback(async (fileId: string) => {
    try {
      const tokens = await GoogleSignin.getTokens();
      const shareResponse = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            role: 'reader',
            type: 'anyone',
          }),
        },
      );
    } catch (e) {
      throw e;
    }
  }, []);

  const getDownloadableLink = useCallback(async (fileId: string) => {
    try {
      const tokens = await GoogleSignin.getTokens();
      const linkResponse = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webViewLink`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
          },
        },
      );

      if (linkResponse.status === 200) {
        const linkData = await linkResponse.json();
        const webViewLink = linkData.webViewLink;
        console.log('Publicly downloadable link:', webViewLink);
      } else {
        console.error('Error getting publicly downloadable link.');
      }
    } catch (e) {
      throw e;
    }
  }, []);

  return {
    createFolder,
    createRootFolder,
    uploadFile,
    changeAccessToPublic,
    getDownloadableLink,
  };
};
