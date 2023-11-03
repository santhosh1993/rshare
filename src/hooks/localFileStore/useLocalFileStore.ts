import {useCallback} from 'react';
import RNFS from 'react-native-fs';

export interface SaveFile {
  filepath: string;
  contents: string;
  encodingOrOptions?: any;
}

export const useLocalFileStore = () => {
  const readFile = useCallback(async (filePath: string) => {
    try {
      const dataStr = await RNFS.readFile(filePath);
      console.log(dataStr);
      return dataStr;
    } catch (e) {
      console.log('Something went wrong reading --->>>', filePath);
      throw e;
    }
  }, []);

  const saveFile = useCallback(async (data: SaveFile) => {
    try {
      const filePath = RNFS.DocumentDirectoryPath + data.filepath;
      const exists = await RNFS.exists(filePath);
      if (exists) {
        await RNFS.unlink(filePath);
      }

      await RNFS.writeFile(filePath, data.contents, data.encodingOrOptions);
      console.log('-->> File got created', filePath);
      return filePath;
    } catch (e) {
      console.log('-->> Something went wrong', e);
      throw e;
    }
  }, []);

  const createDirectory = useCallback(async (directory: string) => {
    try {
      const filePath = RNFS.DocumentDirectoryPath + directory;
      const exists = await RNFS.exists(filePath);

      if (!exists) {
        await RNFS.mkdir(filePath);
      }
    } catch (e) {
      throw e;
    }
  }, []);

  return {
    saveFile,
    createDirectory,
    readFile,
  };
};
