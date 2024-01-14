import {FontWeight, Text} from '@common/text';
import {View} from 'react-native';
import {styles} from './shareCard.styles';
import {Routes} from '@src/root/router/routes';
import {useCallback, useMemo} from 'react';
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
} from '@shopify/react-native-skia';
import {window} from '@common/constants';
import {FastImageProps} from 'react-native-fast-image';

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

  const image = useImage(props.images.length > 0 ? props.images[0] : '');

  const canvasImageProps: SkiaImageProps | null = useMemo(() => {
    if (image) {
      return {
        image: image,
        x: 0,
        y: 0,
        width: window.width,
        height: 200,
        fit: 'cover',
      };
    }
    return null;
  }, [image]);

  const fastImageProps: FastImageProps = useMemo(() => {
    return {
      style: styles.image,
      source: {
        uri: props.images.length > 0 ? props.images[0] : '',
      },
      resizeMode: 'contain',
    };
  }, [props]);

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
