import React from 'react';
import {View} from 'react-native';
import { ShareProjectCardInterFace } from '../share-project.interface';
import QRCode from 'react-native-qrcode-svg';
import { Text } from '@common/text';
import { FontSize } from '@common/font';

export const ShareInfo = ({redirectionUrl, ...shareCard}: ShareProjectCardInterFace) => {
  return (
    <View style={{paddingHorizontal: 16, paddingTop: 8,paddingBottom: 0, alignItems: 'center'}}>
      <Text style={{fontSize: FontSize.xxlarge, paddingBottom: 12}}>{shareCard.rconName}</Text>
      <QRCode
      value={redirectionUrl}
      size={200}
      />
      <View style={{flexDirection:'row', paddingTop: 4, justifyContent: 'space-between', width: '100%'}}>
        <Text style={{fontSize: FontSize.xlarge}}>{shareCard.userName}</Text>
        <Text style={{fontSize: FontSize.xlarge}}>{shareCard.phoneNo}</Text>
      </View>
    </View>
  );
};
