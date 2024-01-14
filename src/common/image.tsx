import React, {memo} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {Image as Img, ImageProps as ImgProps, ViewProps} from 'react-native';
import { Image as SkiaImage, ImageProps as SkiaImageProps } from "@shopify/react-native-skia";

export enum ImageLoadType {
  rnImage,
  fastImage,
  canvasImage
}

export interface ImageProps<K extends ImageLoadType> extends ViewProps {
  type: K;
  props: BaseImageParams[K];
}

type BaseImageParams = {
  [ImageLoadType.rnImage]: ImgProps;
  [ImageLoadType.fastImage]: FastImageProps;
  [ImageLoadType.canvasImage]: SkiaImageProps
};

export const Image = memo(
  <K extends ImageLoadType>({type, props, children}: ImageProps<K>) => {
    switch (type) {
      case ImageLoadType.fastImage:
        return (
          <FastImage {...(props as BaseImageParams[ImageLoadType.fastImage])} />
        );
      case ImageLoadType.rnImage:
        return <Img {...(props as BaseImageParams[ImageLoadType.rnImage])} />;
      case ImageLoadType.canvasImage:
        return <SkiaImage {...(props as BaseImageParams[ImageLoadType.canvasImage])}>{children}</SkiaImage>;
    }
    return <></>;
  },
);
