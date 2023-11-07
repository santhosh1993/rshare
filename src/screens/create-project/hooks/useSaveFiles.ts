import {useCallback} from 'react';
import {Image} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import {useCreateProjectStore} from '../create-project.store';
import {useLocalFileStore} from '@src/hooks/localFileStore/useLocalFileStore';
import {UploadProps} from '@src/hooks/google/useGoogleDrive';
import {useGoogle} from '@src/hooks/google/useGoogle';
import {useNavigation} from '@src/root/navigation/useNavigation';

export const useFiles = () => {
  const nav = useNavigation();

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
    return {data: s.data, details: s.details, setIsLoading: s.setIsLoading};
  });

  const {createDirectory, saveFile} = useLocalFileStore();
  const {authenticate, uploadFile, changeAccessToPublic, getDownloadableLink} =
    useGoogle();

  const uploadFileToDrive = useCallback(
    async (props: UploadProps) => {
      try {
        const data = await uploadFile(props);
        console.log(data, '----->>>>>', props);
        await changeAccessToPublic(data.id);
        return await getDownloadableLink(data.id);
      } catch (e) {
        throw e;
      }
    },
    [changeAccessToPublic, getDownloadableLink, uploadFile],
  );

  const save = useCallback(async () => {
    try {
      data.setIsLoading(true);
      await authenticate();

      for (let section = 0; section < data.data.length; section++) {
        for (
          let fileIndex = 0;
          fileIndex < data.data[section].content.length;
          fileIndex++
        ) {
          const file = data.data[section].content[fileIndex];
          const values = file.url.split('/');
          data.data[section].content[fileIndex].url = await uploadFileToDrive({
            localFilePath: file.url,
            fileName: values[values.length - 1],
          });
          console.log(data.data[section].content[fileIndex].url, '--->>>');
        }
      }

      await createDirectory('/temp');
      const filepath = await saveFile({
        filepath: '/temp/data.json',
        contents: JSON.stringify(data),
        encodingOrOptions: 'utf8',
      });
      const fileData = await uploadFileToDrive({
        localFilePath: filepath,
        fileName: data.details.title + '.json',
      });
      console.log('-->> File got created', fileData);
    } catch (e) {
      console.log('-->> Something went wrong', e);
    }
    data.setIsLoading(false);
  }, [authenticate, createDirectory, data, saveFile, uploadFileToDrive]);

  const dlt = useCallback(() => {}, []);

  return {save, dlt, resize};
};
