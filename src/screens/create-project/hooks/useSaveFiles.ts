import {useCallback} from 'react';
import {Image} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import {useCreateProjectStore} from '../create-project.store';
import {useLocalFileStore} from '@src/hooks/localFileStore/useLocalFileStore';
import {useGoogleDrive} from '@src/hooks/google/useGoogleDrive';
import {useGoogle} from '@src/hooks/google/useGoogle';

export const useFiles = () => {
  const getSize: (
    sourceImage: string,
  ) => Promise<{width: number; height: number}> = useCallback(
    (sourceImage: string) => {
      return new Promise((resolve, reject) => {
        Image.getSize(
          sourceImage,
          (width, height) => resolve({width, height}),
          reject,
        );
      });
    },
    [],
  );

  const resize = useCallback(
    async (sourceImage: string) => {
      try {
        const size = await getSize(sourceImage);
        console.log(size, '--->>>');
        const resizedImage = await ImageResizer.createResizedImage(
          sourceImage,
          size.width,
          size.height,
          'WEBP',
          90,
          0,
          undefined,
          false,
          {onlyScaleDown: true},
        );
        console.log(resizedImage, '---->>>>');
        return resizedImage;
      } catch (e) {
        console.log(e, '----->>>>');
        throw e;
      }
    },
    [getSize],
  );

  const data = useCreateProjectStore(s => {
    return {data: s.data, details: s.details};
  });

  const {createDirectory, saveFile} = useLocalFileStore();
  const {authenticate, uploadFile} = useGoogle();

  const save = useCallback(async () => {
    try {
      await createDirectory('/temp');
      const filepath = await saveFile({
        filepath: '/temp/data.json',
        contents: JSON.stringify(data),
        encodingOrOptions: 'utf8',
      });
      await authenticate();
      await uploadFile(filepath, 'application/json');
      console.log('-->> File got created');
    } catch (e) {
      console.log('-->> Something went wrong', e);
    }
  }, [authenticate, createDirectory, data, saveFile, uploadFile]);

  const dlt = useCallback(() => {}, []);

  return {save, dlt, resize};
};
