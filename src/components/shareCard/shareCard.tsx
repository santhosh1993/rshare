import {FontWeight, Text} from '@common/text';
import {View} from 'react-native';
import {styles} from './shareCard.styles';
import {Routes} from '@src/root/router/routes';
import {useCallback} from 'react';
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
      },
    });
  }, [nav, props]);

  const onSharePress = useCallback(() => {
    nav.global.navigate({
      route: Routes.SHARE_SCREEN,
      params: props,
    });
  }, [nav, props]);

  return (
    <Button onPress={onPress} type={ButtonType.Button}>
      <View style={[styles.container, border.card, shadow.container]}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text fontWeight={FontWeight.BOLD}>{props.rconName} </Text>
            <Button
              type={ButtonType.Button}
              style={styles.shareButton}
              onPress={onSharePress}>
              <SvgShare style={styles.shareImage} fill={'#555'} />
            </Button>
          </View>
          <View style={styles.descriptionContent}>
            <Image
              type={ImageLoadType.fastImage}
              props={{
                style: styles.image,
                source: {
                  uri: props.images.length > 0 ? props.images[0] : '',
                },
              }}
            />
            <View style={styles.description}>
              <Text>{props.rconDescription}</Text>
              <Text>{props.userName}</Text>
            </View>
          </View>
          <View style={styles.actionBar}>
            <Seperator style={styles.actionSeperator} />
            <SvgWhatsapp style={styles.action} />
            <Seperator style={styles.actionSeperator} />
            <SvgPhone style={styles.action} />
          </View>
        </View>
      </View>
    </Button>
  );
};
