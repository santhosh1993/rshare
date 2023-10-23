import {useCallback} from 'react';
import {Image} from 'react-native';
import ImageResizer from 'react-native-image-resizer';

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
  const save = useCallback(() => {}, []);
  const dlt = useCallback(() => {}, []);

  return {save, dlt, resize};
};
