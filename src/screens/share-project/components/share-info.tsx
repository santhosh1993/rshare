import React from 'react';
import {View} from 'react-native';
import { ShareProjectCardInterFace } from '../share-project.interface';
import QRCode from 'react-native-qrcode-svg';

export const ShareInfo = ({redirectionUrl, name, phoneNo}: ShareProjectCardInterFace) => {
  return (
    <View>
      <QRCode
      value={redirectionUrl}
    />
    </View>
  );
};
