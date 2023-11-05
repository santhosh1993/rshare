import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {useCallback} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {useGoogleDriveEvents} from './useGoogleDriveEvents';
import {FileOperationType} from '@src/root/analytics/analytics.Interfaces';
import {err} from 'react-native-svg/lib/typescript/xml';

type GoogleFolder = {
  id: string;
  kind: string;
  mimeType: string;
  name: string;
};

export type UploadProps = {
  localFilePath: string;
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
    async ({localFilePath, fileName}: UploadProps) => {
      const tokens = await GoogleSignin.getTokens();
      const accessToken = tokens.accessToken;
      const url =
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';

      const mimeType = getMimeTypeFromFilePath(localFilePath);

      // Prepare the request headers
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': mimeType,
        'Content-Disposition': `inline; filename="${fileName}"`, // Include the desired name
      };

      // Prepare the request data
      const data = RNFetchBlob.wrap(localFilePath);

      // Perform the file upload
      try {
        const response = await RNFetchBlob.fetch('POST', url, headers, data);

        if (response.respInfo.status === 200) {
          onDriveAPISuccess({
            type: FileOperationType.create,
            fileSize: '',
            fileType: fileName,
          });
          const fileData = JSON.parse(response.data);
          console.log(fileData, '--->>> file data', response.respInfo);
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
      return;
    },
    [onDriveAPIFailure, onDriveAPISuccess],
  );

  const changeAccessToPublic = useCallback(async (fileId: string) => {
    const accessToken = (await GoogleSignin.getTokens()).accessToken;

    const permission = {
      role: 'reader',
      type: 'anyone',
    };

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      console.log(fileId, '--->>> file Id');
      await axios.post(
        `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
        permission,
        config,
      );
      console.log('File is now publicly accessible.');
    } catch (error) {
      console.error('Error setting file permissions:', error);
      throw error;
    }
  }, []);

  const getDownloadableLink = useCallback(async (fileId: string) => {
    const accessToken = (await GoogleSignin.getTokens()).accessToken;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.get(
        `https://www.googleapis.com/drive/v3/files/${fileId}?fields=webContentLink`,
        config,
      );
      const webContentLink = response.data.webContentLink;
      console.log('Public download link:', webContentLink);
      return webContentLink;
    } catch (error) {
      console.error('Error getting download link:', error);
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

function getMimeTypeFromFilePath(filePath: string) {
  const extension = filePath.split('.').pop() ?? '';
  let mimeType = 'application/json'; // Default MIME type

  // Define some common MIME types based on extensions
  const mimeTypesByExtension: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    bmp: 'image/bmp',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    mp4: 'video/mp4',
    webm: 'video/webm',
    ogg: 'video/ogg',
    avi: 'video/x-msvideo',
    json: 'application/json',
    pdf: 'application/pdf',
  };

  // Check if a specific MIME type is defined for the extension
  if (mimeTypesByExtension[extension]) {
    mimeType = mimeTypesByExtension[extension];
  }

  return mimeType;
}
