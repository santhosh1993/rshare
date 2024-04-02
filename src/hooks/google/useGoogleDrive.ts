import {GoogleSignin} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {useCallback} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {useGoogleDriveEvents} from './useGoogleDriveEvents';
import {FileOperationType} from '@src/root/analytics/analytics.Interfaces';

export type UploadProps = {
  localFilePath: string;
  fileName: string;
  source: string;
  parentId: string;
};

export const useGoogleDrive = () => {
  const {onDriveAPIFailure, onDriveAPISuccess} = useGoogleDriveEvents();

  const createFolder = useCallback(async (folderName: string) => {
    const tokens = await GoogleSignin.getTokens();
    const accessToken = tokens.accessToken;

    const url = 'https://www.googleapis.com/drive/v3/files';

    const body = JSON.stringify({
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: body,
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Folder created successfully:', result.id);
      await changeAccessToPublic(result.id);
      return result.id as string;
    } else {
      console.error('Error creating folder:', result.error);
      throw result.error;
    }
  }, []);

  const uploadFile = useCallback(
    async ({localFilePath, fileName, source, parentId}: UploadProps) => {
      const tokens = await GoogleSignin.getTokens();
      const accessToken = tokens.accessToken;
      const url =
        'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';

      const mimeType = getMimeTypeFromFilePath(localFilePath);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': mimeType,
        'Content-Disposition': `inline; filename="${fileName}"`,
      };

      const data = RNFetchBlob.wrap(localFilePath);

      try {
        const response = await RNFetchBlob.fetch('POST', url, headers, data);

        if (response.respInfo.status === 200) {
          onDriveAPISuccess({
            type: FileOperationType.create,
            fileSize: '',
            fileType: fileName,
            source: source,
          });
          const fileData = JSON.parse(response.data);
          return fileData;
        } else {
          onDriveAPIFailure({
            type: FileOperationType.create,
            fileSize: '',
            fileType: fileName,
            source: source,
          });
          throw 'File upload failed.';
        }
      } catch (error) {
        onDriveAPIFailure({
          type: FileOperationType.create,
          fileSize: '',
          fileType: fileName,
          source: source,
        });
        throw error;
      }
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
      return webContentLink;
    } catch (error) {
      console.error('Error getting download link:', error);
    }
  }, []);

  return {
    uploadFile,
    changeAccessToPublic,
    getDownloadableLink,
    createFolder,
  };
};

function getMimeTypeFromFilePath(filePath: string) {
  const extension = filePath.split('.').pop() ?? '';
  let mimeType = 'application/json';

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

  if (mimeTypesByExtension[extension]) {
    mimeType = mimeTypesByExtension[extension];
  }

  return mimeType;
}
