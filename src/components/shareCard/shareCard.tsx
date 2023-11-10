import {FontWeight, Text} from '@common/text';
import {View} from 'react-native';
import {styles} from './shareCard.styles';
import {Routes} from '@src/root/router/routes';
import {useCallback} from 'react';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Seperator} from '@common/seperator';
import React from 'react';
import {border} from '@common/border.styles';
import {Button, ButtonType} from '@common/button';
import SvgShare from '@src/generated/assets/svgs/Share';
import {shadow} from '@common/shadow.styles';
import SvgPhone from '@src/generated/assets/svgs/Phone';
import SvgWhatsapp from '@src/generated/assets/svgs/Whatsapp';
export interface ShareCardInterface {}

export const ShareCard = () => {
  const nav = useNavigation();
  const onPress = useCallback(() => {
    nav.global.navigate({
      route: Routes.PROJECTDETAIL,
      params: {
        name: 'Project 1',
        id: 'asdfsadf',
      },
    });
  }, [nav]);

  return (
    <Button onPress={onPress} type={ButtonType.Button}>
      <View style={[styles.container, border.card, shadow.container]}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text fontWeight={FontWeight.BOLD}>Project Title </Text>
            <Button type={ButtonType.Button} style={styles.shareButton}>
              <SvgShare style={styles.shareImage} fill={'#555'} />
            </Button>
          </View>
          <View style={styles.descriptionContent}>
            <View style={styles.image}></View>
            <View style={styles.description}>
              <Text>Project Description</Text>
              <Text>Name</Text>
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
