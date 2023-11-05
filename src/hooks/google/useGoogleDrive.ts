import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {useCallback} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {useGoogleDriveEvents} from './useGoogleDriveEvents';
import {FileOperationType} from '@src/root/analytics/analytics.Interfaces';

type GoogleFolder = {
  id: string;
  kind: string;
  mimeType: string;
  name: string;
};

export type UploadProps = {
  localFilePath: string;
  mimeType: string;
  fileName: string;
};

export const useGoogleDrive = () => {
  const {onDriveAPIFailure, onDriveAPISuccess} = useGoogleDriveEvents();

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
    async ({localFilePath, mimeType, fileName}: UploadProps) => {
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
          onDriveAPISuccess({
            type: FileOperationType.create,
            fileSize: '',
            fileType: fileName,
          });
          const fileData = JSON.parse(response.data);
          return fileData;
        } else {
          onDriveAPIFailure({
            type: FileOperationType.create,
            fileSize: '',
            fileType: fileName,
          });
          console.error('File upload failed.');
          throw 'File upload failed.';
        }
      } catch (error) {
        onDriveAPIFailure({
          type: FileOperationType.create,
          fileSize: '',
          fileType: fileName,
        });
        console.error('Error uploading file:', error);
        throw error;
      }
    },
    [onDriveAPIFailure, onDriveAPISuccess],
  );

  const changeAccessToPublic = useCallback(
    async (fileId: string) => {
      try {
        const tokens = await GoogleSignin.getTokens();
        const headers = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            role: 'reader',
            type: 'anyone',
          }),
        };

        const shareResponse = await fetch(
          `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
          headers,
        );
        onDriveAPISuccess({type: FileOperationType.accessChange});
      } catch (e) {
        onDriveAPIFailure({type: FileOperationType.accessChange});
        throw e;
      }
    },
    [onDriveAPIFailure, onDriveAPISuccess],
  );

  const getDownloadableLink = useCallback(
    async (fileId: string) => {
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
          onDriveAPISuccess({type: FileOperationType.downloadLink});
          return webViewLink;
        } else {
          onDriveAPIFailure({type: FileOperationType.downloadLink});
          throw 'Error getting publicly downloadable link.';
        }
      } catch (e) {
        onDriveAPIFailure({type: FileOperationType.downloadLink});
        throw e;
      }
    },
    [onDriveAPISuccess, onDriveAPIFailure],
  );

  return {
    createFolder,
    createRootFolder,
    uploadFile,
    changeAccessToPublic,
    getDownloadableLink,
  };
};
