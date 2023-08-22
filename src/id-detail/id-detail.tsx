import {IDDetailInterface} from './id-detail.interface';
import {View} from 'react-native';
import {styles} from './id-detail.styles';
import React, {FC} from 'react';

export const IDDetail: FC<IDDetailInterface> = () => {
  return <View style={styles.header} />;
};
