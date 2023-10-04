import React, {memo} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {Image as Img, ImageProps as ImgProps} from 'react-native';

export enum ImageLoadType {
  rnImage,
  fastImage,
}

export interface ImageProps<K extends ImageLoadType> {
  type: K;
  props: BaseImageParams[K];
}

type BaseImageParams = {
  [ImageLoadType.rnImage]: ImgProps;
  [ImageLoadType.fastImage]: FastImageProps;
};

export const Image = memo(
  <K extends ImageLoadType>({type, props}: ImageProps<K>) => {
    switch (type) {
      case ImageLoadType.fastImage:
        return (
          <FastImage {...(props as BaseImageParams[ImageLoadType.fastImage])} />
        );
      case ImageLoadType.rnImage:
        return <Img {...(props as BaseImageParams[ImageLoadType.rnImage])} />;
    }
    return <></>;
  },
);
