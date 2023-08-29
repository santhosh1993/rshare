import {IDDetailInterface} from './id-detail.interface';
import {View} from 'react-native';
import React, {FC} from 'react';
import {Header} from '@common/header';
import {IDDetailContent} from './components/id-detail-content';
import {styles} from './id-detail.styles';
import {Button, ButtonType} from '@common/button';
import {Seperator} from '@common/seperator';

export const IDDetail: FC<IDDetailInterface> = () => {
  return (
    <View style={styles.parent}>
      <Header />
      <IDDetailContent style={styles.parent} />
      <Seperator />
      <Button type={ButtonType.PrimaryButton} props={{}} />
    </View>
  );
};
