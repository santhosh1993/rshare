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
import {BlurView} from '@react-native-community/blur';

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

  return (
    <Button onPress={onPress} type={ButtonType.Button}>
      <View style={[styles.container, border.card, shadow.container]}>
        <View style={[{height: 200}, border.card]}>
          <Image
            type={ImageLoadType.fastImage}
            props={{
              style: {flex: 1},
              source: {
                uri: props.images.length > 0 ? props.images[0] : '',
              },
            }}
          />
          <BlurView
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
          <Image
            type={ImageLoadType.fastImage}
            props={{
              style: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              },
              source: {
                uri: props.images.length > 0 ? props.images[0] : '',
              },
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 0,
              top: 0,
              left: 0,
              height: 35,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Button
              type={ButtonType.Button}
              style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={onSharePress}>
              <SvgShare style={styles.shareImage} fill={'#fff'} />
            </Button>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              alignItems: 'center',
              backgroundColor: '#00000040',
              paddingHorizontal: 8,
            }}>
            <View style={{flexShrink: 1}}>
              <Text style={{color: 'white'}}>
                For more details call {props.userName}
              </Text>
            </View>
            <View
              style={{
                width: 60,
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Button
                type={ButtonType.Button}
                style={{
                  width: 30,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SvgWhatsapp style={styles.action} />
              </Button>
              <Seperator style={styles.actionSeperator} />
              <Button
                type={ButtonType.Button}
                style={{
                  width: 30,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SvgPhone style={styles.action} />
              </Button>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 8,
          }}>
          <Text fontWeight={FontWeight.BOLD}>{props.rconName}</Text>
          <View style={{flexShrink: 1}}>
            <Text>{props.rconDescription}</Text>
          </View>
        </View>
      </View>
    </Button>
  );
};
