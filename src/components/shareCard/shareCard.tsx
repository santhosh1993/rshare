import {FontWeight, Text} from '@common/text';
import {View} from 'react-native';
import {styles} from './shareCard.styles';
import {Routes} from '@src/root/router/routes';
import {useCallback, useMemo, useState} from 'react';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Seperator} from '@common/seperator';
import React, {FC} from 'react';
import {border} from '@common/border.styles';
import {Button, ButtonType} from '@common/button';
import SvgShare from '@src/generated/assets/svgs/Share';
import {shadow} from '@common/shadow.styles';
import SvgPhone from '@src/generated/assets/svgs/Phone';
import SvgWhatsapp from '@src/generated/assets/svgs/Whatsapp';
import {Image, ImageLoadType} from '@common/image';
import {
  Canvas,
  useImage,
  Blur,
  ImageProps as SkiaImageProps,
  Skia,
  SkImage,
} from '@shopify/react-native-skia';
import {window} from '@common/constants';
import FastImage, {FastImageProps} from 'react-native-trustee-fast-image';

export interface ShareCardInterface {
  images: Array<string>;
  rconName: string;
  rconDescription: string;
  phoneNo: string;
  userName: string;
  rconId: string;
}

export const ShareCard: FC<ShareCardInterface> = props => {
  const nav = useNavigation();
  const onPress = useCallback(() => {
    nav.global.navigate({
      route: Routes.PROJECTDETAIL,
      params: {
        id: props.rconId,
        userName: props.userName,
        phoneNo: props.phoneNo,
        rconName: props.rconName,
        rconDescription: props.rconDescription,
      },
    });
  }, [nav, props]);

  const onSharePress = useCallback(() => {
    nav.global.navigate({
      route: Routes.SHARE_SCREEN,
      params: props,
    });
  }, [nav, props]);

  const [skimage, setSKImage] = useState<SkImage | null>(null);

  const canvasImageProps: SkiaImageProps | null = useMemo(() => {
    if (skimage) {
      return {
        image: skimage,
        x: 0,
        y: 0,
        width: window.width,
        height: 200,
        fit: 'cover',
      };
    }
    return null;
  }, [skimage]);

  const imageSource = {
    uri: props.images.length > 0 ? props.images[0] : '',
  }

  const onFastImageLoad = useCallback(async () => {
    const source = await FastImage.getCachePath(imageSource)
    const data = await Skia.Data.fromURI(`file://${source}`);
    const image = Skia.Image.MakeImageFromEncoded(data);
    setSKImage(image)
  }, [setSKImage])

  const fastImageProps: FastImageProps = useMemo(() => {
    return {
      style: styles.image,
      source: imageSource,
      resizeMode: 'contain',
      onLoad:() => {onFastImageLoad()}
    };
  }, [props, onFastImageLoad]);

  return (
    <Button onPress={onPress} type={ButtonType.Button}>
      <View style={[styles.container, border.card, shadow.container]}>
        <View style={[styles.imageContainer, border.card]}>
          {canvasImageProps && (
            <Canvas style={styles.canvas}>
              <Image
                type={ImageLoadType.canvasImage}
                props={canvasImageProps}
              />
              <Blur blur={8} />
            </Canvas>
          )}
          <Image type={ImageLoadType.fastImage} props={fastImageProps} />
          <View style={styles.shareContainer}>
            <Button
              type={ButtonType.Button}
              style={styles.shareButton}
              onPress={onSharePress}>
              <SvgShare style={styles.shareImage} fill={'#fff'} />
            </Button>
          </View>
          <View style={styles.userInfoContainer}>
            <View style={styles.userInfo}>
              <Text style={styles.rconUserText}>
                For more details call {props.userName}
              </Text>
            </View>
            <View style={styles.actionBar}>
              <Button type={ButtonType.Button} style={styles.actionButton}>
                <SvgWhatsapp style={styles.action} />
              </Button>
              <Seperator style={styles.actionSeperator} />
              <Button type={ButtonType.Button} style={styles.actionButton}>
                <SvgPhone style={styles.action} />
              </Button>
            </View>
          </View>
        </View>
        <View
          style={styles.rconDescription}>
          <Text fontWeight={FontWeight.BOLD}>{props.rconName}</Text>
          <View style={styles.userInfo}>
            <Text>{props.rconDescription}</Text>
          </View>
        </View>
      </View>
    </Button>
  );
};
