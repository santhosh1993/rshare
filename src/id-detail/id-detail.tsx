import {IDDetailInterface} from './id-detail.interface';
import {View} from 'react-native';
import {styles} from './id-detail.styles';
import React, {FC} from 'react';
import {Header} from '@common/header';
import {IDDetailContent} from './components/id-detail-content';

export const IDDetail: FC<IDDetailInterface> = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <IDDetailContent style={{flex: 1, backgroundColor: 'yellow'}} />
    </View>
  );
};
