import {IDDetailInterface} from './id-detail.interface';
import {View} from 'react-native';
import React, {FC} from 'react';
import {Header} from '@common/header';
import {IDDetailContent} from './components/id-detail-content';
import {styles} from './id-detail.styles';
import {Button, ButtonType} from '@common/button';
import {colors} from '@common/colors';
import {Shadow, ShadowDirection} from '@common/shadow';

export const IDDetail: FC<IDDetailInterface> = () => {
  return (
    <View style={styles.parent}>
      <Header />
      <IDDetailContent style={styles.parent} />
      <View>
        <Shadow type={ShadowDirection.Top} color={colors.shadow.dark} />
      </View>
      <Button type={ButtonType.PrimaryButton} props={{}} />
    </View>
  );
};
