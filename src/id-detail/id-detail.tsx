import {IDDetailInterface} from './id-detail.interface';
import {View} from 'react-native';
import React, {FC} from 'react';
import {Header} from '@common/header';
import {IDDetailContent} from './components/id-detail-content';
import {styles} from './id-detail.styles';
import {colors} from '@common/colors';
import {Shadow, ShadowDirection} from '@common/shadow';
import {SubmitButton} from './components/id-detail-submit-button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const IDDetail: FC<IDDetailInterface> = () => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View style={[styles.parent, {paddingTop: top}]}>
      <Header />
      <IDDetailContent style={styles.parent} />
      <View>
        <Shadow type={ShadowDirection.Top} color={colors.shadow.dark} />
      </View>
      <SubmitButton style={{paddingBottom: bottom}} />
    </View>
  );
};
